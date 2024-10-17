import React, { useState } from "react";
import Icon from "../Icon";
import { plus, cancel } from "@root/icons";

const Attachments = () => {
  const [attachments, setAttachments] = useState([]);

  const addAttachment = (event) => {
    const files = Array.from(event.target.files);
    const newAttachments = files.map((file) => ({
      id: Date.now() + Math.random(), // Unique ID
      type: URL.createObjectURL(file), // Create a URL for the file
      name: file.name, // Store the file name (optional)
    }));
    setAttachments([...attachments, ...newAttachments]);
  };

  const removeAttachment = (id) => {
    setAttachments(attachments.filter((attachment) => attachment.id !== id));
  };

  return (
      <div className="flex flex-wrap gap-2">
        {attachments.map((attachment) => (
          <div
            key={attachment.id}
            className="relative border-2 border-dashed border-gray-400 p-4 w-20 h-24 flex items-center justify-center"
          >
            <img
              src={attachment.type}
              alt={attachment.name}
              className="object-cover w-full h-full"
            />
            <button
              onClick={() => removeAttachment(attachment.id)}
              className="absolute top-0 right-0 p-1"
            >
              <Icon src={cancel} className="w-3" />
            </button>
          </div>
        ))}
        <label className="border-2 border-dashed border-gray-400 w-20 h-24 flex items-center justify-center cursor-pointer">
          <input
            type="file"
            multiple
            onChange={addAttachment}
            className="hidden"
          />
          <Icon src={plus} />
        </label>
      </div>
  );
};

export default Attachments;
