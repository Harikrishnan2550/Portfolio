import React from 'react';

function ResumeButton()  {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://app.enhancv.com/share/962c93f4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic'; // URL of the resume file
    link.download = 'Harikrishnan_Resume.pdf'; // Desired download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Download Resume
    </button>
  );
};

export default ResumeButton;
