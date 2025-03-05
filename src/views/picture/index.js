import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";  // Import du hook
import {
  AdminContainer,
  FormContainer,
  Title,
  SubmitButton,
  SecondTitle,
  InputField,
  FileListContainer,
  FilePreview,
  FileInput,
} from "./index.styled";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  getMetadata,
} from "@firebase/storage";
import { storage } from "../../firebase-config";
import { Stack, Paper } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PicturePage = () => {
  const { t } = useTranslation(); // Initialisation du hook
  const [height, setHeight] = useState(window.visualViewport.height);

  useEffect(() => {
    const handleResize = () => setHeight(window.visualViewport.height);
    const handleScroll = () => setHeight(window.visualViewport.height);
    window.visualViewport.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.visualViewport.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);
  const [percent, setPercent] = useState(0);
  const [filesList, setFilesList] = useState([]);

  useEffect(() => {
    const listFiles = async () => {
      const filesRef = ref(storage, "/files");
      const files = await listAll(filesRef);
      const filePromises = files.items.map(async (fileRef) => {
        const url = await getDownloadURL(fileRef);
        const metadata = await getMetadata(fileRef);
        return { url, name: metadata.name, createdAt: metadata.timeCreated };
      });
      const urls = await Promise.all(filePromises);
      const sortedFiles = urls.sort((a, b) => {
        const aDate = new Date(a.createdAt).getTime();
        const bDate = new Date(b.createdAt).getTime();
        return bDate - aDate;
      });
      setFilesList(sortedFiles);
    };
    listFiles();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert(t("alert.photoRequired"));  // Utilisation de la traduction
    }
    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `/files/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file, {
      customMetadata: {
        timestamp: Date.now().toString(),
      },
    });
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setFilesList([
            {
              url: url,
              name: fileName,
              createdAt: new Date().toISOString(),
            },
            ...filesList
          ]);
          setFile(null);
        });
      }
    );
  };

  const handleFileDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    link.target = "_blank"; 
    link.click();
  };

  return (
    <AdminContainer style={{ height: `${height}px` }}>
      <FormContainer onSubmit={handleFormSubmit}>
        <Title>{t("title.sharePhotos")}</Title>  {/* Traduction du titre */}
        <SecondTitle>{t("event_place")}</SecondTitle>  {/* Traduction du sous-titre */}
        <Stack direction="row" spacing={2} sx={{ marginBottom: 3, width: "100%" }}>
          <FileInput type="file" onChange={handleFileChange} />
          <SubmitButton type="submit">
            {percent !== 0 && percent !== 100 ? `${percent}%` : t("button.send")}
          </SubmitButton>
          {downloadURL && <img src={downloadURL} alt="uploaded file" />}
        </Stack>

        <Paper sx={{ height: "100%", width: "100%", overflowY: "scroll" }}>
          <FileListContainer>
            {filesList.map((fileUrl) => {
              return (
                <div key={fileUrl.url}>
                  {fileUrl.url.toLowerCase().includes(".png") ||
                  fileUrl.url.toLowerCase().includes(".jpg") ||
                  fileUrl.url.toLowerCase().includes(".jpeg") ? (
                    <FilePreview
                      src={fileUrl.url}
                      alt="image"
                      effect="blur"
                      onClick={() => handleFileDownload(fileUrl.url)}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </FileListContainer>
        </Paper>
      </FormContainer>
    </AdminContainer>
  );
};

export default PicturePage;
