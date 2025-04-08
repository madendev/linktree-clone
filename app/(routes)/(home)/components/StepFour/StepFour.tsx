"use client";

import Image from "next/image";
import { dataStepFourImages } from "./StepFour.data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";

export function StepFour() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const [photoUrl, setPhotoUrl] = useState("");
  const [showUploadButton, setShowUploadButton] = useState(false);

  console.log("photoUrl", photoUrl);

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Añadir detalles del perfil
      </h2>
      <p className="text-center">Selecciona tu imagen de perfil o súbela</p>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-5 items-center">
        {dataStepFourImages.map(({ src }) => (
          <div
            key={src}
            className={
              "flex flex-col items-center gap-2 p-1 rounded-full text-white transition-all duration-300 cursor-pointer"
            }
          >
            <Image
              src={src}
              alt="Imagen de perfil"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>
        ))}
        <UploadButton
          className="rounded-md text-slate-800 bg-slate-200 h-full"
          endpoint="profileImage"
          onClientUploadComplete={(res) => {
            setPhotoUrl(res?.[0].ufsUrl);
            setShowUploadButton(false);
          }}
          onUploadError={(error: Error) => {
            console.log(error);
          }}
        />
      </div>

      <div className="mt-5">
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition duration-200"
          />
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition duration-200"
          />
        </div>
        <div className="mt-6 md:mt-16">
          <Button className="w-full bg-purple-600" onClick={() => {}}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
