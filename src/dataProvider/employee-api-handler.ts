import Config from '../config';
import { async } from 'q';
const axios = require('axios');

const EMPLOYEE_ENDPOINT = `${Config.ServiceEndpoint}/employee`;
export async function getEmployeesByCampaign(campaignId: number) {
    
    let fetchedEmployees: any = [];
    console.log("Getting Employees for campaign" + campaignId);
    try {
        let response = await axios.get(`${EMPLOYEE_ENDPOINT}/campaign/${campaignId}`);
        response.data.forEach((employee: any) => {
            console.log(employee);
            fetchedEmployees.push(employee);
        });
    } catch (error) {
        throw error;
    }
    return fetchedEmployees;
}
export async function addNewEmployee(employee: any) {

    try {
        let res = await axios.post(EMPLOYEE_ENDPOINT, employee);
        if (res.status === 201) // 201 Created
            return res.data;
        throw new Error("Failed to Add Employee");
    } catch (error) {
        throw error;
    }
}
export async function deleteEmployee(employeeId: number) {

    try {
        let res = await axios.delete(`${EMPLOYEE_ENDPOINT}/${employeeId}`);
        if (res.status === 200) {
            return;
        }
        throw new Error("Failed to Remove Employee");
    } catch (error) {
        throw error;
    }
}

// export async function uploadAllPhotos(uploadFileList:any, albumId: number) {
    
//     const formData = new FormData();

//     // Loop Selected files and Append in Form Data.
//     uploadFileList.forEach((file:any) => {
//       console.log(file.originFileObj);
//       formData.append(`Files`, file.originFileObj);
//     });

//     // ID of album in which images will be added.
//     formData.append(`AlbumID`, `${albumId}`);

//     try{
//         let res = await axios.post(IMAGE_STORE_ENDPOINT, formData, {
//           headers: {'Content-Type': 'multipart/form-data'}
//         });
//         return res;   
//     }catch(error){
//         throw error;
//     }
// }