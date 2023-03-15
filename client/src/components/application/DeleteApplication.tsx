import React, { useState } from 'react';
// import { useApplication } from '../hooks/useApplication';

// const deleteApplication = ({ application }) => {
//     const [error, setError] = useState(null);

//     const handleClick = async () => {
//         const response = await fetch('/api/application/' application._id, {
//             method: 'DELETE',
//         })
//         const json = await response.json();

//         if (!response.ok) {
//             setError(json.error);
//         }
//         if (response.ok) {
//             // dispatch({ type: 'DELETE_APPLICATION', payload: json });
//             setError(null);
//             console.log("Application deleted successfully", json);      
//         }


//             return (
//                 <>


//                 </>
//             )
//     }
//     export default deleteApplication