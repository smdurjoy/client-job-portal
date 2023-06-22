import React from 'react';
import ReactSelect from "../Wrapper/ReactSelect";
import Loader from "../Loader/Loader";

const ProfileUpdate = ({
                           register,
                           errors,
                           handleSubmit,
                           onSubmit,
                           industries,
                           isSubmitting,
                           countries,
                           handleCountryChange,
                           states,
                           cities,
                           areas,
                           setValue,
                           isLoading,
                       }) => {
    return (
        <div className="container" style={{marginTop: '8rem', marginBottom: '3rem'}}>
            <h4>Company Profile</h4>
            {
                isLoading ? <Loader/> : (
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-3 form-group">
                                <label className="form-label">Industry</label>
                                <ReactSelect
                                    options={industries}
                                    onChange={(e) => setValue('industry_id', e.id)}
                                    required={true}
                                />
                            </div>
                            <div className="col-md-3 form-group">
                                <label className="form-label">Country</label>
                                <ReactSelect
                                    options={countries}
                                    onChange={(e) => handleCountryChange(e)}
                                    required={true}
                                />
                            </div>
                            <div className="col-md-3 form-group">
                                <label className="form-label">State</label>
                                <ReactSelect
                                    options={states}
                                    onChange={(e) => setValue('state_id', e.id)}
                                    required={true}
                                />
                            </div>
                            <div className="col-md-3 form-group">
                                <label className="form-label">City</label>
                                <ReactSelect
                                    options={cities}
                                    onChange={(e) => setValue('city_id', e.id)}
                                    required={true}
                                />
                            </div>
                            <div className="col-md-3 mt-2">
                                <label className="form-label">Area</label>
                                <ReactSelect
                                    options={areas}
                                    onChange={(e) => setValue('area_id', e.id)}
                                    required={true}
                                />
                            </div>
                            <div className="col-md-3 mt-2">
                                <label className="form-label">Address</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Write"
                                       {...register('address', {required: true})}
                                />
                                {errors.address && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3 mt-2">
                                <label className="form-label">Zipcode</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Write"
                                       {...register('zip_code', {required: true})}
                                />
                                {errors.zip_code && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3 mt-2">
                                <label className="form-label">Contact Person Name</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Write"
                                       {...register('contact_person_name', {required: true})}
                                />
                                {errors.contact_person_name &&
                                    <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3 mt-2">
                                <label className="form-label">Contact Person Position</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Write"
                                       {...register('contact_person_position', {required: true})}
                                />
                                {errors.contact_person_position &&
                                    <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3 mt-2">
                                <label className="form-label">Contact Person Phone</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Write"
                                       {...register('contact_person_mobile', {required: true})}
                                />
                                {errors.contact_person_mobile &&
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
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6 offset-md-3 text-center">
                                <button type="submit" className="btn saveBtn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </div>
                    </form>
                )
            }
        </div>
    );
};

export default ProfileUpdate;