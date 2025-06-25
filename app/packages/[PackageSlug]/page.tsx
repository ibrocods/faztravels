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
