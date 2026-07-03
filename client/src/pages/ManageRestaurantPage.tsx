import { useCreateMyRestaurant } from "@/api/MyReataurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {
   const { createRestaurant, isPending: isCreateLoading } =
    useCreateMyRestaurant();

      // const isEditing = !!restaurant;
  return (
    <div>
      <ManageRestaurantForm
          onSave={createRestaurant}
          isLoading={isCreateLoading}
        />
    </div>
  )
}
