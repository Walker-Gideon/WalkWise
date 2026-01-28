// Function to upload profile image and return the download URL
export async function uploadProfileImage(file, uid) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_preset"); // Replace with your actual unsigned preset name
    // Optional: Use uid to create a specific folder or public_id if needed
    // formData.append("public_id", \`users/\${uid}/profile\`);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dttlsqszp/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (response.ok && data.secure_url) {
      return data.secure_url;
    } else {
      console.error("Cloudinary upload error", data);
      return null;
    }
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
}
    
