"use client";


import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { Edit2, Pencil } from "lucide-react";


export function EditDestinationModal({ destination }) {
  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    console.log(destination);

    const res = await fetch(`${process.env.NEXT_SERVER_PUBLIC_URL}/destination/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(destination),
    });

    const data = await res.json();

    console.log(data);
    // if (modifiedCount) {
    //     revalidatePath(`/destination/${_id}`)
    // }
  };
  return (
    <Modal>
      <Button
        variant="outline"
        className="border rounded-none border-gray-300 px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 transition"
      >
        <Pencil size={15} />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Edit2 className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Destination</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                {/* Form */}
                <form onSubmit={onSubmit} className="p-3 md:p-5 space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label className="mb-2 text-base font-semibold text-gray-700">
                          Destination Name
                        </Label>
                        <Input
                          placeholder="Bali Paradise Retreat"
                          className="rounded-2xl py-6 text-base"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField defaultValue={country} name="country" isRequired>
                      <Label className="mb-2 text-base font-semibold text-gray-700">
                        Country
                      </Label>
                      <Input
                        placeholder="Indonesia"
                        className="rounded-2xl py-6 text-base"
                      />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select
                        name="category"
                        isRequired
                        defaultValue={category}
                        className="w-full"
                        placeholder="Select category"
                      >
                        <Label>Category</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach" textValue="Beach">
                              Beach
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Mountain" textValue="Mountain">
                              Mountain
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="City" textValue="City">
                              City
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Adventure" textValue="Adventure">
                              Adventure
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Cultural" textValue="Cultural">
                              Cultural
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">
                              Luxury
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label className="mb-2 text-base font-semibold text-gray-700">
                        Price (USD)
                      </Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl py-6 text-base"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                    >
                      <Label className="mb-2 text-base font-semibold text-gray-700">
                        Duration
                      </Label>
                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-2xl py-6 text-base"
                      />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <TextField
                      defaultValue={departureDate}
                      name="departureDate"
                      type="date"
                      isRequired
                    >
                      <Label className="mb-2 text-base font-semibold text-gray-700">
                        Departure Date
                      </Label>
                      <Input
                        type="date"
                        className="rounded-2xl py-6 text-base"
                      />
                      <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label className="mb-2 text-base font-semibold text-gray-700">
                          Image URL
                        </Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl py-6 text-base"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label className="mb-2 text-base font-semibold text-gray-700">
                          Description
                        </Label>
                        <TextArea
                          placeholder="Describe the travel experience, highlights, itinerary, and unique features..."
                          className="rounded-3xl py-5 text-base"
                          minRows={7}
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit" slot="close">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
