import React from "react";

const ContentSection = ({ contents }) => {
    return contents ? (
        <>
            {contents.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
        </>
    ) : <div>Loading...</div>
};

export default ContentSection;