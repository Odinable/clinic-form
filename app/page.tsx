// pages/Home.tsx
import React from "react";
import InputField from "@/components/input";
import SelectField from "@/components/selectfeild";
import SubmitButton from "@/components/submitbutton";
import NumberInput from "@/components/numberinput";
import { useFormik } from "formik";
import Image from "next/image";

const Home: React.FC = () => {
  const medicalFieldOptions = [
    { value: "doctor1", label: "DOCTOR 1" },
    { value: "doctor2", label: "DOCTOR 2" },
    { value: "doctor3", label: "DOCTOR 3" },
    { value: "doctor4", label: "DOCTOR 4" },
    { value: "doctor5", label: "DOCTOR 5" },
  ];

  
  return (
    <main className='h-screen flex items-center justify-center'>
      <Image 
        src="/public/1.jpg"
        alt={""}
        fill />
      
      <form className='bg-white rounded-lg flex sm:w-full md:w-2/3 lg:w-1/3'>
        <div>
          <div className='flex-1 text-gray-700 p-20'>
            <h1 className='text-2xl pb-2 font-bold'>Pick your appointment</h1>
            <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis voluptas minima ratione, delectus.</p>

            {/* Reusable Input components */}
            <InputField label="Patient Name" type="text" name="Patient Name" placeholder="Enter Your Name" />
            <InputField label="Email" type="email" name="Email" placeholder="Enter Your Email" />
            <NumberInput label="Phone" name="Phone" placeholder="Enter Your Phone" />
            <InputField label="Clinic Name" type="text" name="Clinic Name" placeholder="Enter Clinic Name" />


            {/* Reusable Select component */}
            <SelectField label="Select Medical Field You Want To Visit" name="medfeild" options={medicalFieldOptions} />

            {/* Reusable Button component */}
            <SubmitButton label="Submit" />
          </div>
        </div>
      </form>
    </main>
  );
};

export default Home;
