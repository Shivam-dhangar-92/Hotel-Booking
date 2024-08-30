import { Router } from "express";

import { deleteListing,updateListing,createListing ,allListings, particularListing } from "../controllers/listings.controllers.js";



const router=Router();

router.route("/").get(allListings);

router.route("/:id").get(particularListing)

router.route("/delete/:id").delete(deleteListing)

router.route("/update/:id").put(updateListing)

router.route("/create").post(createListing)

export default router;