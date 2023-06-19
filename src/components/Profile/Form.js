import React from 'react';
import '../../assets/css/profile.css';
import ReactSelect from "../Wrapper/ReactSelect";
import {Link} from "react-router-dom";

const Form = ({
                  countries,
                  cities,
                  states,
                  areas,
                  handleCountryChange,
                  handleSubmit,
                  onSubmit,
                  register,
                  errors,
                  setValue,
                  control,
                  useFieldArray,
                  isSubmitting,
                  profile,
              }) => {

    const {
        fields: educations,
        append: educationAppend,
        remove: educationRemove
    } = useFieldArray({control, name: "degree_list"});
    const {
        fields: skills,
        append: skillAppend,
        remove: skillRemove
    } = useFieldArray({control, name: "skills"});

    return (
        <div className="profileForm">
            <div className="container">
                <h4>Update Profile</h4>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">First Name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                                   {...register('first_name', {required: true})}
                            />
                            {errors.first_name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Middle Name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                                   {...register('middle_name')}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Last Name</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                                   {...register('last_name')}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Email</label>
                            <input type="email"
                                   className="form-control"
                                   placeholder="Write"
                                   {...register('email')}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Phone Number</label>
                            <input type="number"
                                   className="form-control"
                                   placeholder="Write"
                                   {...register('phone_number')}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Date Of Birth</label>
                            <input type="date"
                                   className="form-control"
                                   {...register('date_of_birth', {required: true})}
                            />
                            {errors.date_of_birth && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-12 my-2 form-group">
                            <label className="form-label">Cover Letter</label>
                            <textarea className="form-control"
                                      rows="6"
                                      placeholder="Write"
                                      {...register('cover_letter')}
                            >
                            </textarea>
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Country</label>
                            <ReactSelect
                                options={countries}
                                onChange={(e) => handleCountryChange(e)}
                                register={register}
                                name='country_id'
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">State</label>
                            <ReactSelect
                                options={states}
                                onChange={(e) => setValue('state_id', e.id)}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">City</label>
                            <ReactSelect
                                options={cities}
                                onChange={(e) => setValue('city_id', e.id)}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Area</label>
                            <ReactSelect
                                options={areas}
                                onChange={(e) => setValue('area_id', e.id)}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Address Line 1</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                                   {...register('address_line1')}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Address Line 2</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                                   {...register('address_line2')}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Gender</label>
                            <ReactSelect
                                options={[
                                    {
                                        id: 1,
                                        label: 'Male'
                                    },
                                    {
                                        id: 2,
                                        label: 'Female'
                                    }
                                ]}
                                onChange={(e) => setValue('gender_id', e.id)}
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Postal Code</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                                   {...register('postal_code', {required: true})}
                            />
                            {errors.postal_code && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-12 my-2 form-group">
                            <label className="form-label">Education</label>
                            {profile.educations.map((item, index) => (
                                <div className="row mt-2" key={item.id}>
                                    <div className="col-md-3">
                                        <ReactSelect
                                            options={[
                                                {
                                                    id: 1,
                                                    label: 'BSc'
                                                },
                                                {
                                                    id: 2,
                                                    label: 'Diploma'
                                                }
                                            ]}
                                            onChange={(e) => setValue(`degree_list.${index}.degree_id`, e.id)}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Institute"
                                               {...register(`degree_list.${index}.institute`)}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input type="date"
                                               className="form-control"
                                               {...register(`degree_list.${index}.passing_year`)}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"
                                                   value=""
                                                   {...register(`degree_list.${index}.is_currently_reading`)}
                                                   id={`currentStudy` + index}
                                            />
                                            <label className="form-check-label" htmlFor={`currentStudy` + index}>
                                                Currently Studying
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="btn btn-danger btn-sm" type="button"
                                                onClick={() => educationRemove(index)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="btn btn-dark btn-sm mt-3 ml-2"
                                onClick={() => educationAppend({
                                    degree_id: '',
                                    institute: '',
                                    passing_year: '',
                                    is_currently_reading: false
                                })}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-12 my-2 form-group">
                            <label className="form-label">Skills</label>
                            <div className="row">
                                {skills.map((item, index) => (
                                    <div className="col-md-2 d-flex" key={item.id}>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Write"
                                               {...register(`skill_list.${index}`)}
                                        />
                                        <button className="btn btn-danger btn-sm" type="button"
                                                onClick={() => skillRemove(index)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button
                                type="button"
                                className="btn btn-dark btn-sm mt-3 ml-4"
                                onClick={() => skillAppend({skill_list: ''})}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-12 my-2 form-group">
                            <label className="form-label">Work Experience</label>
                            <textarea className="form-control" rows="6" placeholder="Write"></textarea>
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Reference Id</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Find Of Work</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Write"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Photo</label>
                            <input type="file"
                                   className="form-control"
                            />
                        </div>
                        <div className="col-md-6 my-2 form-group">
                            <label className="form-label">Attachment</label>
                            <input type="file"
                                   className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 offset-md-3 text-center">
                            <button type="submit" className="btn saveBtn" disabled={isSubmitting}>
                                {isSubmitting ? 'Saving...' : 'Save'}
                            </button>
                            <button type="submit" className="btn viewProfile">
                                <Link to="/profile">
                                    View Profile
                                </Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;