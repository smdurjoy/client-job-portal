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
import {useGetAllJobCategoriesQuery, useGetSalaryTypesQuery} from "../services/jobs";
import {useGetJobDetailsQuery} from "../services/authJobs";
import {useGetDegreesQuery} from "../services/common";
import {useAppSelector} from "../app/hooks";
import useJobPostManger from "../app/customHooks/useJobPostManger";
import {toast} from "react-toastify";
import {useNavigate, useSearchParams} from "react-router-dom";
import Loader from "../components/common/Loader";

const PostAJobPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [jobId, setJobId] = useState(null);
    const {user_id} = useAppSelector((state) => state.app);
    const [isJobBasicPosted, setIsJobBasicPosted] = useState(false);
    const [jobBasics, setJobBasics] = useState({
        user_id,
        job_title: null,
        job_type_id: null,
        job_category_id: null,
        job_level_id: null,
        employment_status_id: null,
        work_place_id: null,
        salary_type_id: null,
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
        job_address: null,
        zip_code: null,
    });

    const {data: jobCategories} = useGetAllJobCategoriesQuery();
    const {data: jobLevels} = useGetJobLevelsQuery();
    const {data: jobTypes} = useGetJobTypesQuery();
    const {data: employmentStatus} = useGetJobEmploymentStatusQuery();
    const {data: jobPlaces} = useGetJobPlacesQuery();
    const {data: skills} = useGetJobSkillsQuery();
    const {data: degrees} = useGetDegreesQuery();
    const {data: jobBenefits} = useGetJobBenefitsQuery();
    const {data: salaryTypes} = useGetSalaryTypesQuery();
    const {
        data: jobDetails,
        isLoading: isJobFetchLoading,
        isSuccess: isJobFetchSuccess
    } = useGetJobDetailsQuery(jobId, {
        skip: !jobId,
    });
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

        updateJobBasics,
    } = useJobPostManger();

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const id = searchParams.get("id");
        if (id) {
            setJobId(id);
        }
    }, [searchParams]);

    useEffect(() => {
        if (isJobFetchSuccess) {
            const job = jobDetails?.job_details;
            setJobBasicsData(job);
            setJobRequirementData(job);
            setJobAddress({
                ...jobAddress,
                job_id: jobId,
                job_address: job?.job_address,
                zip_code: job?.zip_code,
            })
        }
    }, [isJobFetchSuccess]);

    const handleSave = async () => {
        setIsLoading(true);
        if (jobId) {
            await updateJobBasics(jobBasics);
            setIsJobBasicPosted(true);
            return;
        }
        await createJobBasic(jobBasics);
    }

    useEffect(() => {
        if (jobBasics.min_salary && jobBasics.max_salary) {
            setJobBasics({
                ...jobBasics,
                salary_range: `${jobBasics.min_salary}-${jobBasics.max_salary}`
            })
        }
    }, [jobBasics.min_salary, jobBasics.max_salary])

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
            setIsJobBasicPosted(true);
        }
    }, [isJobBasicSuccess])

    useEffect(() => {
        if (isJobBasicPosted) {
            createJobRequirement(jobRequirement);
            createJobAddress(jobAddress);
        }
    }, [isJobBasicPosted])

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
        if (isJobAddressSuccess) {
            const {status, message} = jobAddressCreateResponse;
            if (status === 0) {
                setIsLoading(false);
                toast.warning(message);
            }
        }
    }, [isJobBasicSuccess, isJobAddressSuccess]);

    useEffect(() => {
        if (isJobRequirementSuccess && isJobAddressSuccess) {
            setIsLoading(false);
            toast.success(jobId ? 'Updated Successfully.' : 'Job Posted Successfully.');
            navigate('/posted-jobs');
        }
    }, [isJobRequirementSuccess, isJobAddressSuccess]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Post a Job - workersRUS';
    }, [])

    const setJobBasicsData = (job) => {
        setJobBasics({
            ...jobBasics,
            job_id: jobId,
            job_title: job?.job_title,
            job_type_id: job?.job_type_id,
            job_category_id: job?.job_category_id,
            job_level_id: job?.job_level_id,
            employment_status_id: job?.employment_status_id,
            work_place_id: job?.work_place_id,
            salary_type_id: job?.salary_type_id,
            min_salary: null,
            max_salary: null,
            salary_range: job?.salary_range,
            no_of_vacancies: job?.no_of_vacancies,
            job_responsibility: job?.job_responsibilities,
            application_deadline: job?.application_deadline,
            job_description: job?.job_description,
        })
    }
    const setJobRequirementData = (job) => {
        setJobRequirement({
            ...jobRequirement,
            job_id: jobId,
            minimum_age: job?.age_require_minimum,
            maximum_age: job?.age_require_maximum,
            degree_id: job?.degree_id,
            skills_ids: job?.skills_requirements.map(({id}) => id),
            benefit_ids: job?.benefits.map(({id}) => id),
            gender_ids: job?.gender_requirements.map(({id}) => id),
            cv_receiving_ids: job?.cv_receiving_option.map(({id}) => id),
        })
    }

    return (
        <>
            <Navbar isForHomePage={false}/>
            {jobId && isJobFetchLoading ? (
                <Loader/>
            ) : (
                <PostAJob
                    jobCategories={jobCategories ? jobCategories?.job_categories : []}
                    jobLevels={jobLevels ? jobLevels?.data : []}
                    jobTypes={jobTypes ? jobTypes?.data : []}
                    employmentStatus={employmentStatus ? employmentStatus?.data : []}
                    jobPlaces={jobPlaces ? jobPlaces?.data : []}
                    skills={skills ? skills?.data : []}
                    degrees={degrees ? degrees?.areas : []}
                    jobBenefits={jobBenefits ? jobBenefits?.data : []}
                    salaryTypes={salaryTypes ? salaryTypes?.data : []}

                    jobBasics={jobBasics}
                    setJobBasics={setJobBasics}

                    jobRequirement={jobRequirement}
                    setJobRequirement={setJobRequirement}

                    jobAddress={jobAddress}
                    setJobAddress={setJobAddress}

                    handleSave={handleSave}
                    isLoading={isLoading}

                    isUpdateMode={!!jobId}
                />
            )}
            <Footer/>
        </>
    )
}
export default PostAJobPage;