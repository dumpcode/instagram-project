import faker from "@faker-js/faker";
import{ useEffect, useState} from "react";

function Suggestions() {
    const[suggestions, setSuggestions]= useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }));

        setSuggestions(suggestions)
    }, [])

  return<div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
          <h3 className="text-sm 
          font-bold text-gray-400">Suggestions for you</h3>
          <button className="text-gray-600 font-semibold">See All</button>
      </div>

        {
            suggestions.map(profile => (
                <div key={profile.id} className="flex
                items-center justify-between">
                    <img className="w-10 h-10 
                    rounded-full border p-[2px]" 
                    src={profile.avatar}/>

                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">
                            {profile.username}</h2>

                        <h3 className="text-xs text-gray-400">
                            Works at {profile.company.name}
                        </h3>
                    </div>

                    <button className="text-blue-400  text-xs text-bold">Follow</button>
                    
                </div>
                
            ))

        }
            {/* <div className=" items-center p-1 text-xs text-gray-300 
                            cursor-pointer 
                            box-border 
                            inline-grid grid-cols-8 ">
                <span>About</span>
                <span>.Help</span>
                <span>.Press</span>
                <span>.API</span>
                <span>.Jobs</span>
                <span>.Privacy</span>
                <span>.Terms</span>
                <span>.Locations</span>
                <span>.Top Accounts</span>
                <span>.Hashtags</span>
                <span>.Language</span>
                <span>.English</span>
            </div> */}
            <h3 className="flex items-center p-2 text-xs text-gray-300 ">
                ©2022 ZYZZGRAM FROM PYNEON
            </h3>
    </div>;
  
}

export default Suggestions