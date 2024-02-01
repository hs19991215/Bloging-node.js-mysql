function upload(req, res, next) {
  if (req.file.filename) {
    res
      .status(200)
      .json({ message: "Image uploaded successfully", url: req.file.filename });
  } else {
    console.log("Error in image upload");
    res.status(400).json({ message: "Somthing went wrong" });
  }
}

module.exports = {
  upload,
};
