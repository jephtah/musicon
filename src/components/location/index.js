import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7581768215323!2d3.4246474153523128!3d6.425107926080454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5312334a98f%3A0x3c77a3b287836483!2sTerra+Kulture%2C+Victoria+Island+Lagos!5e0!3m2!1sen!2sng!4v1550076274999" 

        width="100%" 
        height="500px" 
        FrameBorder="0"
        AllowFullScreen>
      </iframe>
        <div className="location_tag">
          <div>Location Map</div>
        </div>
    </div>
  );
};
 
export default Location;