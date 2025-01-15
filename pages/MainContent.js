import React from 'react';
const MainContent = (props) => {
return (
<article>
<h2>{props.title}</h2>
<p>{props.content}</p>
</article>
);
};
export default MainContent;