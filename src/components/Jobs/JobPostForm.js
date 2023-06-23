import React from 'react';
import ReactSelect from "../Wrapper/ReactSelect";

const JobPostForm = ({
                         register,
                         errors,
                         handleSubmit,
                         onSubmit,
                         categories,
                         jobTypes,
                         isSubmitting,
                         levels,
                         employmentStatus,
                         workPlaces,
                         benefits,
                         cvReceivingOptions,
                         setValue,
                         handleCountryChange,
                         degrees,
                         countries,
                         states,
                         cities,
                         areas,
                     }) => {

    const handleMultiSelect = (data, field) => {
        const ids = data.map(item => item.id);
        setValue(field, ids)
    }

    return (
        <div className="container" style={{marginTop: '8rem', marginBottom: '3rem'}}>
            <h4>Post Job</h4>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Job Title</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Write"
                               {...register('job_title', {required: true})}
                        />
                        {errors.job_title && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-3 form-group">
                        <label className="form-label">Job Type</label>
                        <ReactSelect
                            options={jobTypes}
                            onChange={(e) => setValue('job_type_id', e.id)}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 form-group">
                        <label className="form-label">Category</label>
                        <ReactSelect
                            options={categories}
                            onChange={(e) => setValue('job_category_id', e.id)}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 form-group">
                        <label className="form-label">Level</label>
                        <ReactSelect
                            options={levels}
                            onChange={(e) => setValue('job_level_id', e.id)}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Employment Status</label>
                        <ReactSelect
                            options={employmentStatus}
                            onChange={(e) => setValue('employment_status_id', e.id)}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Work Place</label>
                        <ReactSelect
                            options={workPlaces}
                            onChange={(e) => setValue('work_place_id', e.id)}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Salary Range</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Write"
                               {...register('salary_range', {required: true})}
                        />
                        {errors.salary_range && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">No of Vacancy</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Write"
                               {...register('no_of_vacancies', {required: true})}
                        />
                        {errors.no_of_vacancies &&
                            <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Job Responsibilities</label>
                        <textarea className="form-control" placeholder="Write" rows="4"
                                  {...register('job_responsibility', {required: true})}
                        >
                                </textarea>
                        {errors.job_responsibility &&
                            <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Application Deadline</label>
                        <input type="date"
                               className="form-control"
                               placeholder="Write"
                               {...register('application_deadline', {required: true})}
                        />
                        {errors.application_deadline &&
                            <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Contact Person Email</label>
                        <input type="email"
                               className="form-control"
                               placeholder="Write"
                               {...register('contact_person_email', {required: true})}
                        />
                        {errors.contact_person_email &&
                            <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Minimum Age</label>
                        <input type="number"
                               className="form-control"
                               placeholder="Write"
                               {...register('minimum_age', {required: true})}
                        />
                        {errors.minimum_age &&
                            <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Maximum Age</label>
                        <input type="number"
                               className="form-control"
                               placeholder="Write"
                               {...register('maximum_age', {required: true})}
                        />
                        {errors.maximum_age &&
                            <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-3 my-2 form-group">
                        <label className="form-label">Degree</label>
                        <ReactSelect
                            options={degrees}
                            onChange={(e) => setValue('degree_id', e.id)}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 mt-2">
                        <label className="form-label">Experience Require</label>
                        <input type="number"
                               className="form-control"
                               placeholder="Write"
                               {...register('require_experience', {required: true})}
                        />
                        {errors.require_experience &&
                            <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-3 my-2 form-group">
                        <label className="form-label">Skill</label>
                        <ReactSelect
                            options={[
                                {
                                    id: 1,
                                    value: 1,
                                    label: 'Test'
                                },
                            ]}
                            isMulti={true}
                            onChange={(e) => handleMultiSelect(e, 'skills_ids')}
                        />
                    </div>
                    <div className="col-md-3 my-2 form-group">
                        <label className="form-label">Gender</label>
                        <ReactSelect
                            options={[
                                {
                                    id: 1,
                                    value: 1,
                                    label: 'Male'
                                },
                                {
                                    id: 2,
                                    value: 2,
                                    label: 'Female'
                                },
                            ]}
                            isMulti={true}
                            onChange={(e) => handleMultiSelect(e, 'gender_ids')}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 my-2 form-group">
                        <label className="form-label">Benefits</label>
                        <ReactSelect
                            options={benefits}
                            isMulti={true}
                            onChange={(e) => handleMultiSelect(e, 'benefit_ids')}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 my-2 form-group">
                        <label className="form-label">CV Receiving Option</label>
                        <ReactSelect
                            options={cvReceivingOptions}
                            isMulti={true}
                            onChange={(e) => handleMultiSelect(e, 'cv_receiving_ids')}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 my-2 form-group">
                        <label className="form-label">Country</label>
                        <ReactSelect
                            options={countries}
                            onChange={(e) => handleCountryChange(e)}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 my-2 form-group">
                        <label className="form-label">State</label>
                        <ReactSelect
                            options={states}
                            onChange={(e) => setValue('state_id', e.id)}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 my-2 form-group">
                        <label className="form-label">City</label>
                        <ReactSelect
                            options={cities}
                            onChange={(e) => setValue('city_id', e.id)}
                            required={true}
                        />
                    </div>
                    <div className="col-md-3 my-2 form-group">
                        <label className="form-label">Area</label>
                        <ReactSelect
                            options={areas}
                            onChange={(e) => setValue('area_id', e.id)}
                            required={true}
                        />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 text-center">
                        <button type="submit" className="btn saveBtn" disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default JobPostForm;