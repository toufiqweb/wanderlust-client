"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import React from "react";

const DestinationPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    // console.log(destination);
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_SERVER_PUBLIC_URL}/destination`, {
      method: "POST",
      headers: { "content-type": "application/json" ,
        authorization : `Bearer ${tokenData?.token}`
       },
      body: JSON.stringify(destination),
    });

    const data = await res.json();

    console.log(data);
  };
  return (
    <div className="min-h-screen md:py-25  bg-linear-to-br from-gray-50 to-gray-100  px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-sm  overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-600 px-8 md:px-12 py-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Add Travel Destination
          </h1>
          <p className="text-white/90 mt-3 text-lg">
            Create a stunning new travel package for your customers
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-8 md:p-12 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label className="mb-2 text-base font-semibold text-gray-700">
                  Destination Name
                </Label>
                <Input
                  placeholder="Bali Paradise Retreat"
                  className=" py-6 px-5 text-base rounded-none shadow-none border border-gray-200"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label className="mb-2 text-base font-semibold text-gray-700">
                Country
              </Label>
              <Input
                placeholder="Indonesia"
                className=" py-6 px-5 text-base rounded-none shadow-none border border-gray-200"
              />
              <FieldError />
            </TextField>

            {/* Category */}
            {/* Category - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full "
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className=" py-6 px-5 text-base rounded-none shadow-none border border-gray-200">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className=" py-2 text-base rounded-none shadow-none border border-gray-200">
                  <ListBox>
                    <ListBox.Item
                      id="Beach"
                      textValue="Beach"
                      className="rounded-none shadow-none"
                    >
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Mountain"
                      textValue="Mountain"
                      className="rounded-none shadow-none"
                    >
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="City"
                      textValue="City"
                      className="rounded-none shadow-none"
                    >
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Adventure"
                      textValue="Adventure"
                      className="rounded-none shadow-none"
                    >
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Cultural"
                      textValue="Cultural"
                      className="rounded-none shadow-none"
                    >
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Luxury"
                      textValue="Luxury"
                      className="rounded-none shadow-none"
                    >
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label className="mb-2 text-base font-semibold text-gray-700">
                Price (USD)
              </Label>
              <Input
                type="number"
                placeholder="1299"
                className=" py-6 px-5 text-base rounded-none shadow-none border border-gray-200"
              />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label className="mb-2 text-base font-semibold text-gray-700">
                Duration
              </Label>
              <Input
                placeholder="7 Days / 6 Nights"
                className=" py-6 px-5 text-base rounded-none shadow-none border border-gray-200"
              />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <TextField name="departureDate" type="date" isRequired>
              <Label className="mb-2 text-base font-semibold text-gray-700">
                Departure Date
              </Label>
              <Input
                type="date"
                className=" py-6 px-5 text-base rounded-none shadow-none border border-gray-200"
              />
              <FieldError />
            </TextField>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label className="mb-2 text-base font-semibold text-gray-700">
                  Image URL
                </Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className=" py-6 px-5 text-base rounded-none shadow-none border border-gray-200"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className="mb-2 text-base font-semibold text-gray-700">
                  Description
                </Label>
                <TextArea
                  placeholder="Describe the travel experience, highlights, itinerary, and unique features..."
                  className=" py-6 px-5 text-base rounded-none shadow-none border border-gray-200"
                  minRows={7}
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-linear-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 
                       text-white py-7 text-xl font-semibold rounded-none shadow-none  
                       transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Add Travel Package
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DestinationPage;
