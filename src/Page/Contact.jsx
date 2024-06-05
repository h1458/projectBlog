import React, { useState } from 'react'
import Layout from '../Common/Layout'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { ContactCreate } from '../Redux/LikeUnlikeSlice'

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    console.log(watch(['name', 'email', 'phone', 'message']))

    const dispatch = useDispatch()

    const mutation = useMutation({
        mutationFn: (data) => dispatch(ContactCreate(data)),
        onSuccess: (data) => {
            console.log("data submitted", data)
        },
        onError: (data) => {
            console.log("error found", data)
        }
    })

    const onsubmit = (data) => {

        mutation.mutate(data)
    }
    return (
        <>
            <Layout>
                <section class="contact_us">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <div class="contact_inner">
                                    <div class="row">
                                        <div class="col-md-10">
                                            <div class="contact_form_inner">
                                                <div class="contact_field">
                                                    <h3>Your Future In Your Hand</h3>
                                                    <p>We make your dream comes true. with full guideness, support, and knlowedge!.</p>
                                                    <form onSubmit={handleSubmit(onsubmit)}>
                                                        <input type="text" name='name' class="form-control form-group" placeholder="Name"
                                                            {...register('name', { required: true })}
                                                        />
                                                        {errors?.name?.type === 'required' && <p style={{ color: 'red' }}>This Field is Required</p>}
                                                        <input type="text" name='email' class="form-control form-group" placeholder="Email"
                                                            {...register('email', { required: true })}
                                                        />
                                                        {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>This Field is Required</p>}
                                                        <input type="tel" name='phone' class="form-control form-group" placeholder="Phone"
                                                            {...register('phone', { required: true })}
                                                        />
                                                        {errors?.phone?.type === 'required' && <p style={{ color: 'red' }}>This Field is Required</p>}
                                                        <textarea class="form-control form-group" name='message' placeholder="Message"
                                                            {...register('message', { required: true })}
                                                        >
                                                        </textarea>
                                                        {errors?.message?.type === 'required' && <p style={{ color: 'red' }}>This Field is Required</p>}
                                                        <button class="contact_form_submit" type='submit'>Apply</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="right_conatct_social_icon d-flex align-items-end">
                                                <div class="socil_item_inner d-flex">
                                                    <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contact_info_sec">
                                        <h4 className='text-white'>Contact Info</h4>
                                        <div class="d-flex info_single align-items-center">
                                            <i class="fas fa-headset" style={{ color: 'white' }}></i>
                                            <span className='text-white'>+91 8009 054294</span>
                                        </div>
                                        <div class="d-flex info_single align-items-center">
                                            <i class="fas fa-envelope-open-text" style={{ color: 'white' }}></i>
                                            <span className='text-white'>info@flightmantra.com</span>
                                        </div>
                                        <div class="d-flex info_single align-items-center">
                                            <i class="fas fa-map-marked-alt" style={{ color: 'white' }}></i>
                                            <span className='text-white'>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="map_sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <div class="map_inner">
                                    <h4>Find Us on Google Map</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                                    <div class="map_bind">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Contact