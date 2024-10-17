import React from 'react';
import Link from 'next/link'; 

const NavigationLinks = ({ section }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-8">{section.heading}</h2>
      {section.links.map((data) => (
        data.link ? (
          <Link href={data.link} key={data.name} className="flex items-center text-sm mb-4">
            {data.name}
          </Link>
        ) : (
          <p key={data.name} className="flex items-center text-sm mb-4">
            {data.name}
          </p>
        )
      ))}
    </div>
  );
};

export default NavigationLinks;
