import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { SiPhonepe } from "react-icons/si";

export const Checkout = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-center text-2xl font-bold mb-4">Checkout</h2>
        <div className="space-y-4">
          <Input type="text" placeholder="Full Name" className="w-full" />
          <Input type="email" placeholder="Email Address" className="w-full" />
          <Button className="w-full mt-4">Complete Purchase</Button>
          <div className="flex flex-col space-y-2 mt-4">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              <FcGoogle size={20} /> Pay with Google Pay
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              <SiPhonepe size={20} className="text-purple-600" /> Pay with UPI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
