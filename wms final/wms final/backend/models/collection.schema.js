import mongoose from "mongoose";

const collectionSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a category name"],
            trim: true,
            maxLength: [120, "Collection name should not be more than 120 character"]
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Collection", collectionSchema)