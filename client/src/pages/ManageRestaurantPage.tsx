import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyReataurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {
   const { createRestaurant, isPending: isCreateLoading } =
    useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();
      const { updateRestaurant, isPending: isUpdateLoading } =
    useUpdateMyRestaurant();

      const isEditing = !!restaurant;
  return (
    <div>
      <ManageRestaurantForm
          restaurant={restaurant}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          isLoading={isCreateLoading || isUpdateLoading}
        />
    </div>
  )
}
