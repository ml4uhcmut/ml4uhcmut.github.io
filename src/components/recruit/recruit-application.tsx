
interface RecruitApplicationProps {
  title: string;
  url: string;
  contact_email: string;
  deadline: string;
}

export default function RecruitApplication({ 
  title, 
  url, 
  contact_email, 
  deadline 
}: RecruitApplicationProps) {
  const formLink = url && url !== "<insert interest form link>" ? url : "#";
  const email = contact_email && contact_email !== "<insert contact email>" ? contact_email : "";
  const deadlineText = deadline && deadline !== "<insert deadline>" ? deadline : "TBA";
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        {title}
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-blue-500">
        <p className="mb-4 text-lg">
          If you are interested in joining our lab, please contact us via email {email && (
            <> or contact <a href={`mailto:${email}`} className="text-blue-600 underline hover:text-blue-800 transition-colors">{email}</a> for more details.</>
          )}. 
          The title of your email should be "[AITech Lab Application] Your name".
          Please include a résume with your details.
          
        </p>
        <div className="font-medium text-lg flex items-center">
          <span className="mr-2">🕒</span> 
          <div>Deadline: {deadlineText}</div>
        </div>
      </div>
    </div>
  );
}
