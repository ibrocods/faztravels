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