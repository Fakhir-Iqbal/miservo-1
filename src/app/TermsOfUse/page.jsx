import React from 'react';
import Navbar from '@root/src/components/Navbar/page';

const TermsOfUse = () => {
  // Sample data array
  const data = [
    { id: 1, title: "Terms of use statement:", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 2, title: "Lorem Ipsum is simply dummy text", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum" },
    { id: 3, title: "Lorem Ipsum is simply dummy text", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum" },
    { id: 4, title: "Lorem Ipsum is simply dummy text", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum" },
    { id: 5, title: "Lorem Ipsum is simply dummy text", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum" },
    { id: 6, title: "Lorem Ipsum is simply dummy text", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum" },

  ];

  return (
    <div>
      <Navbar />
        <h1 className='text-2xl font-bold mt-6 text-center' > Terms Of Use </h1>
      <div className="p-4 m-8 bg-white rounded-xl">
        {data.map((item) => (
          <div key={item.id} className="mb-4">
            <h2 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h2>
            <p className="text-gray-700 text-sm ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermsOfUse;
