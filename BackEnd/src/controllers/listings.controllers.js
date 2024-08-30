import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import { Listing } from "../models/listing.model.js";

const allListings = asyncHandler(async (req, res) => {
  const allListings = await Listing.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, allListings, "Avatar updated successfully"));
});

const particularListing = asyncHandler(async (req, res) => {
  let { id } = req.params;
  const particularListing = await Listing.findById(id);
  if (!particularListing) {
    throw new ApiError(402, "No such Listing exits");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        particularListing,
        "Paraticular fecthed successfully"
      )
    );
});

const createListing = asyncHandler(async (req, res) => {
  //Have to validate the listing
  try {
    let { title, price, location, country } = req.body;

    const newlisting = await Listing.create({
      title,
      price,
      location,
      country,
    });
    return res
      .status(200)
      .json(new ApiResponse(200, newlisting, "Added successfully"));
  } catch (error) {
    console.log(error);
  }
});

const deleteListing = asyncHandler(async (req, res) => {
   
  let { id } = req.params;
  
//   if (req.user._id != id) {
//     throw new ApiError(400, "You are not allowed to delete this listing");
//   }
  await Listing.findByIdAndDelete(id);
  return res
  .status(200)
  .json(new ApiResponse("deleted succefully"))

});

const updateListing = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let { title, price, location, country } = req.body;
  await Listing.findByIdAndUpdate(id,{ title, price, location, country});
  return res.status(200).json(new ApiResponse(200, "Updated succefully"));
});

export {
  allListings,
  particularListing,
  createListing,
  deleteListing,
  updateListing,
};
