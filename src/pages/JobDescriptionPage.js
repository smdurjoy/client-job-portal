import React, {useEffect, useState} from 'react';
import '../assets/css/candidates.css';
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import JobDescription from "../components/Jobs/JobDescription";
import ProfileBanner from "../components/Common/ProfileBanner";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchJobDescription } from '../api/jobs/jobs';
import axios from 'axios';
import { toastError, toastSuccess } from '../Helpers/Toaster';

const CandidatesPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [jobDescription, setJobDescription] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [workerId, setWorkerId] = useState(null);

    const handleJobDescription = () => {
        setJobDescription([]);
        setLoading(true);
        fetchJobDescription(id).then(jobDesc => {
            setJobDescription(jobDesc);
            setLoading(false);
        });
    }

    // const handleJobApply = async () => {
    //     try {
    //       const response = await axios.post('https://example.com/api/endpoint', {
    //         id,
    //         workerId,
    //       });
    //       console.log("###", response.data); // You can handle the response data here
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    const handleJobApply = async () => {
        try {
            const {data} = await axios.post('/worker/job/apply/', {
                job_id: parseInt(id),
                worker_id: parseInt(workerId)
            });
            if (data.status === 0) {
                alert(data.message);
                toastError(data.message);
            } else {
                toastSuccess('Successfully Applied');
                alert('Successfully Applied');
                navigate('/')
            }
        } catch (err) {
            toastError('Something Went Wrong !');
        }
    };

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = 'Job Description - workersRUS';
        handleJobDescription()
    }, [])

    useEffect(()=>{
        setWorkerId(localStorage.getItem('user_id'));
    },[])
    
    return (
        <>
            <Navbar navBg='scrolledNav'/>
            <ProfileBanner 
                jobDescription={jobDescription}
                isLoading={isLoading}
                title="aaabc"
            />
            <JobDescription
                jobDescription={jobDescription}
                isLoading={isLoading}
                handleJobApply={handleJobApply}
            />
            <Footer/>
        </>
    );
};

export default CandidatesPage;