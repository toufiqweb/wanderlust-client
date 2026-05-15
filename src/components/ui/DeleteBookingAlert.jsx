"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { FaBan } from "react-icons/fa";
import { toast } from "react-toastify";

export function DeleteBookingAlert({ bookingId }) {
  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`http://localhost:4000/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Booking deleted successfully!");
      window.location.reload();
    } else {
      toast.error("Failed to delete booking.");
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="inline-flex rounded-none items-center gap-2 px-4 py-2 text-sm border border-red-400 text-red-500  hover:bg-red-50 transition"
      >
        <FaBan />
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
