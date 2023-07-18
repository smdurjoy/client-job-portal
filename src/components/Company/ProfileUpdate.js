import React from 'react';
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
                                <select className="form-control"
                                        name="industry_id" {...register('industry_id', {required: true})}>
                                    {
                                        industries?.map(industry => (
                                            <option value={industry.id}>{industry.label}</option>
                                        ))
                                    }
                                </select>
                                {errors.industry_id && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3 form-group">
                                <label className="form-label">Country</label>
                                <select className="form-control"
                                        name="country_id" {...register('country_id', {required: true})}>
                                    {
                                        countries?.map(country => (
                                            <option value={country.id} onChange={(e) => handleCountryChange(e)}>
                                                {country.label}
                                            </option>
                                        ))
                                    }
                                </select>
                                {errors.country_id && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3 form-group">
                                <label className="form-label">State</label>
                                <select className="form-control"
                                        name="state_id" {...register('state_id', {required: true})}>
                                    {
                                        states?.map(state => (
                                            <option value={state.id}>{state.label}</option>
                                        ))
                                    }
                                </select>
                                {errors.state_id && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3 form-group">
                                <label className="form-label">City</label>
                                <select className="form-control"
                                        name="city_id" {...register('city_id', {required: true})}>
                                    {
                                        cities?.map(city => (
                                            <option value={city.id}>{city.label}</option>
                                        ))
                                    }
                                </select>
                                {errors.city_id && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3 mt-2">
                                <label className="form-label">Area</label>
                                <select className="form-control"
                                        name="area_id" {...register('area_id', {required: true})}>
                                    {
                                        areas?.map(area => (
                                            <option value={area.id}>{area.label}</option>
                                        ))
                                    }
                                </select>
                                {errors.area_id && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3 mt-2">
                                <label className="form-label">Address</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Write"
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