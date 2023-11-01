"use client"

import React, { useState, ChangeEvent, MouseEventHandler } from 'react';
import TextInput from '@/components/input';
import DateInput from '@/components/dateinput';
import RadioButton from '@/components/radiobutton';
import SubmitButton from '@/components/submitbutton';
import ReactSelect from 'react-select';


const App: React.FC = () => {
  const [fName, setFName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState<string>('');
  // const [time, setTime] = useState<string>('');
  const [isAttending, setIsAttending] = useState<boolean>(true);

  const options = [
    { label: '9:00AM', value: '9:00' },
    { label: '9:30AM', value: '9:30' },
    { label: '10:00AM', value: '10:00' },
    { label: '10:30AM', value: '10:30' },
    { label: '11:00AM', value: '11:00' },
    { label: '11:30AM', value: '11:30' },
    { label: '12:00PM', value: '12:00' },
    { label: '12:30PM', value: '12:30' },
    { label: '1:00PM', value: '1:00' },
    { label: '1:30PM', value: '1:30' },
    { label: '2:00PM', value: '2:00' },
    { label: '2:30PM', value: '2:30' },
    { label: '3:00PM', value: '3:00' },
    { label: '3:30PM', value: '3:30' },
    { label: '4:00PM', value: '4:00' },
    { label: '4:30PM', value: '4:30' },
    // { label: '5:00AM', value: '5:00' },
    
    
  ];
    

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAttending(event.target.id === 'radioButton1');
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = () => {
    // Basic validation
    if (!fName || !email || !phone || !date ) {
      alert('Please fill out all fields.');
      return;
    }

    // Additional validation logic can be added here

    // Implement your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center"
     style={{ 
      
      background: '#edf2f7'
      // backgroundImage: 'url("public/1.jpg")', 
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',

     }}
     
     >

      <div className="flex items-center justify-center ">
        <div className="mx-auto w-full max-w-[550px]">
          <form className='bg-white rounded-lg p-10'>
            
          <div className='rounded-lg border-solid bg-[#6A64F1] text-white p-10 py-1'>
              <h1 className='text-2xl pb-2 pt-3 font-bold'>Pick your appointment</h1>
              <p className='text-lg text-white pb-4'>Kindly provide Accurate Information</p>
          </div>

          <div className='pt-5'>
            <TextInput label="Patient Name" name="fName" id="fName" placeholder="Patient Name" value={fName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFName(e.target.value)} />
            <TextInput label="Email" name="email" id="email" type="email" placeholder="Email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            <TextInput label="Phone Number" name="phone" id="phone" type="tel" placeholder="Phone Number" value={phone} onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} />
            <DateInput label="Date" name="date" id="date" value={date} onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)} />
          
            <label htmlFor="select" className="mb-3 block text-base font-medium text-[#07074D]">Select time</label>
            <ReactSelect options={options} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
 />
            
          </div>


            <div className="mb-5 mt-4">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">Gender</label>
                        <div className="flex items-center space-x-6">
                          <RadioButton id="radioButton1" label="Male" checked={isAttending} onChange={handleRadioChange} />
                          <RadioButton id="radioButton2" label="Female" checked={!isAttending} onChange={handleRadioChange} />
                        </div>
            </div>

            <SubmitButton onClick={handleSubmit} />
      
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
