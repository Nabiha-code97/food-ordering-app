import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const {currentUser, isLoading: isGetLoading} = useGetMyUser();
  const {updateUser, isPending: isUpdateLoading} = useUpdateMyUser();
  if(isGetLoading){
      <span>Loading...</span>
    }
    if(!currentUser){
      <span>Unable to load current User</span>
    }
  return (
    
    <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>
  );
};

export default UserProfilePage;