<<<<<<< HEAD
import React from "react"

type Props = {
    params:{
        packageSlug : string;

    };
};
export default function PackageDetailPage({params}: Props){
    return(
        <div>
            <h1>
                You Selected :{params.packageSlug}
            </h1>
        </div>
    );
}
=======
import React from "react";

type Props = {
  params: {
    packageSlug: string;
  };
};

export default function PackageDetailPage({ params }: Props) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-blue-600">
        You selected: {params.packageSlug}
      </h1>
      {/* Add more content here */}
    </div>
  );
}
>>>>>>> da60c881936fedd7991297424b6f04d208a2cf43
