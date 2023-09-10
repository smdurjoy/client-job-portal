import React, {useEffect, useState} from 'react';
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import PostAJob from "../components/companyPart/PostAJob";
import {
    useGetJobBenefitsQuery,
    useGetJobEmploymentStatusQuery,
    useGetJobLevelsQuery,
    useGetJobPlacesQuery,
    useGetJobSkillsQuery,
    useGetJobTypesQuery
} from "../services/authJobs";
import {useGetAllJobCategoriesQuery} from "../services/jobs";
import {useGetCountriesQuery, useGetDegreesQuery} from "../services/common";
import {useAppSelector} from "../app/hooks";
import useJobPostManger from "../app/customHooks/useJobPostManger";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const PostAJobPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {data: jobCategories} = useGetAllJobCategoriesQuery();
    const {data: jobLevels} = useGetJobLevelsQuery();
    const {data: jobTypes} = useGetJobTypesQuery();
    const {data: employmentStatus} = useGetJobEmploymentStatusQuery();
    const {data: jobPlaces} = useGetJobPlacesQuery();
    const {data: skills} = useGetJobSkillsQuery();
    const {data: degrees} = useGetDegreesQuery();
    const {data: jobBenefits} = useGetJobBenefitsQuery();
    const {data: countries} = useGetCountriesQuery();
    const {user_id} = useAppSelector((state) => state.app);
    const {
        isJobBasicSuccess,
        createJobBasic,
        jobBasicCreateResponse,
        isJobBasicError,
        jobBasicError,

        isJobRequirementSuccess,
        createJobRequirement,
        jobRequirementCreateResponse,

        isJobAddressSuccess,
        createJobAddress,
        jobAddressCreateResponse,
    } = useJobPostManger();

    const navigate = useNavigate();

    const [jobBasics, setJobBasics] = useState({
        user_id,
        job_title: null,
        job_type_id: null,
        job_category_id: null,
        job_level_id: null,
        employment_status_id: null,
        work_place_id: null,
        min_salary: null,
        max_salary: null,
        salary_range: null,
        no_of_vacancies: null,
        job_responsibility: null,
        application_deadline: null,
        job_description: null,
        salary_type: null,
    });

    const [jobRequirement, setJobRequirement] = useState({
        job_id: null,
        minimum_age: null,
        maximum_age: null,
        degree_id: null,
        require_experience: null,
        skills_ids: [],
        benefit_ids: [],
        gender_ids: [],
        cv_receiving_ids: [],
    });

    const [jobAddress, setJobAddress] = useState({
        job_id: null,
        address: null,
        country_id: null,
        state_id: null,
        city_id: null,
        area_id: null,
    });

    const handleSave = async () => {
        setIsLoading(true);
        if (jobBasics.min_salary && jobBasics.max_salary) {
            setJobBasics({
                ...jobBasics,
                salary_range: `${jobBasics.min_salary}-${jobBasics.max_salary}`
            })
        }
        await createJobBasic(jobBasics);
    }

    useEffect(() => {
        if (isJobBasicSuccess) {
            const {status, message} = jobBasicCreateResponse;
            if (status === 0) {
                toast.warning(message);
                setIsLoading(false);
                return;
            }

            const {job_id} = jobBasicCreateResponse;
            setJobRequirement({
                ...jobRequirement,
                job_id,
            });
            setJobAddress({
                ...jobAddress,
                job_id,
            });
        }
    }, [isJobBasicSuccess])

    useEffect(() => {
        if (jobRequirement.job_id) {
            createJobRequirement(jobRequirement);
            createJobAddress(jobAddress);
        }
    }, [jobRequirement.job_id])

    useEffect(() => {
        if (isJobBasicError) {
            setIsLoading(false);
            const {data: {status, message}} = jobBasicError;
            if (status === 0) {
                toast.warning(message);
                setIsLoading(false);
            }
        }
    }, [isJobBasicError]);

    useEffect(() => {
        if (isJobRequirementSuccess) {
            const {status, message} = jobRequirementCreateResponse;
            if (status === 0) {
                toast.warning(message);
                setIsLoading(false);
            }
        }
    }, [isJobBasicSuccess]);

    useEffect(() => {
        if (isJobAddressSuccess) {
            const {status, message} = jobAddressCreateResponse;
            if (status === 0) {
                setIsLoading(false);
                toast.warning(message);
            }
        }
    }, [isJobAddressSuccess]);

    useEffect(() => {
        if (isJobRequirementSuccess && isJobAddressSuccess) {
            setIsLoading(false);
            toast.success('Job Posted Successfully.');
            navigate('/posted-jobs');
        }
    }, [isJobRequirementSuccess, isJobAddressSuccess]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Post a Job - workersRUS';
    }, [])

    return (
        <>
            <Navbar isForHomePage={false}/>
            <PostAJob
                jobCategories={jobCategories ? jobCategories?.job_categories : []}
                jobLevels={jobLevels ? jobLevels?.data : []}
                jobTypes={jobTypes ? jobTypes?.data : []}
                employmentStatus={employmentStatus ? employmentStatus?.data : []}
                jobPlaces={jobPlaces ? jobPlaces?.data : []}
                skills={skills ? skills?.data : []}
                degrees={degrees ? degrees?.areas : []}
                jobBenefits={jobBenefits ? jobBenefits?.data : []}
                countries={countries ? countries?.counties : []}

                jobBasics={jobBasics}
                setJobBasics={setJobBasics}

                jobRequirement={jobRequirement}
                setJobRequirement={setJobRequirement}

                jobAddress={jobAddress}
                setJobAddress={setJobAddress}

                handleSave={handleSave}
                isLoading={isLoading}
            />
            <Footer/>
        </>
    );
};

export default PostAJobPage;