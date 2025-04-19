"use client";
import { Role } from "@/lib/utils/recruitment";
import { useState } from "react";
import Markdown from 'react-markdown';

interface RecruitPositionsProps {
  title: string;
  roles: Role[];
}

export default function RecruitPositions({ title, roles }: RecruitPositionsProps) {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  
  const toggleExpand = (roleId: string) => {
    if (expandedRole === roleId) {
      setExpandedRole(null);
    } else {
      setExpandedRole(roleId);
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map(role => {
          const isExpanded = expandedRole === role.id;
          
          return (
            <div 
              key={role.id} 
              className={`
                bg-blue-50 rounded-lg shadow-md transition-all duration-300
                ${isExpanded ? 'shadow-lg' : 'hover:shadow-lg'}
                cursor-pointer
              `}
              onClick={() => toggleExpand(role.id)}
            >
              {/* Always visible content */}
              <div className="p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 text-2xl font-bold">✅</span>
                    <h4 className="text-xl font-semibold text-gray-800">{role.title}</h4>
                  </div>
                  <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-medium">
                    {role.available} slots
                  </div>
                </div>
                
                {/* Expandable details */}
                <div 
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isExpanded ? 'mt-4 max-h-96' : 'max-h-0'}
                  `}
                >
                  {role.description && (
                    <div className="mt-2 mb-3">
                      <h5 className="text-sm font-semibold text-gray-600 mb-1">Description:</h5>
                      <div className="text-gray-700 prose">
                        <Markdown>{role.description}</Markdown>
                      </div>
                    </div>
                  )}
                  
                  {role.topics && role.topics.length > 0 && (
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-600 mb-1">Topics:</h5>
                      <ul className="list-disc pl-5 text-gray-700">
                        {role.topics.map((topic, idx) => (
                          <li key={idx}>
                            <Markdown>{topic}</Markdown>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Expand/collapse indicator */}
                <div className="flex justify-center mt-2">
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}