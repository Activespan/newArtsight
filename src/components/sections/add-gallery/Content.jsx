import React, { Fragment, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ImageUploading from "react-images-uploading";
import { useHistory } from "react-router-dom";

const Content = () => {
  const history = useHistory();
  const [cv, setCv] = useState({});
  const [avatar, setAvatar] = useState({});
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [education, setEducation] = useState("");
  const [artType, setArtType] = useState(1);
  const [style, setStyle] = useState(1);
  const [otherInfo, setOtherInfo] = useState("");

  const [exName, setExName] = useState("");
  const [exType, setExType] = useState(1);
  const [exDay, setExDay] = useState("1");
  const [exMonth, setExMonth] = useState("January");
  const [exYear, setExYear] = useState(1950);
  const [exVenue, setExVenue] = useState();
  const [exOrginizer, setExOrginizer] = useState("");

  const [jobTitle, setJobTitle] = useState("JOb 1");
  const [jobWidth, setJobWidth] = useState("");
  const [jobHeight, setJobHeight] = useState("");
  const [jobDay, setJobDay] = useState("1");
  const [jobMonth, setJobMonth] = useState("January");
  const [jobYear, setJobYear] = useState("1950");
  const [jobSales, setJobSales] = useState("");
  const [jobTheme, setJobTheme] = useState("");
  const [jobWords, setJobWords] = useState("");
  const [jobPhoto, setJobPhoto] = useState("");
  const [jobMaterial, setJobMaterial] = useState("");

  const [modalShow, setModalShow] = useState("");
  const [modalJobShow, setModalJobShow] = useState("");

  const [exs, setExs] = useState([]);
  const [jobs, setJobs] = useState({});

  const addEx = () => {
    if (exs.length < 3) {
      exs.push({
        name: exName,
        type: exType,
        date: `${exDay}/${exMonth}/${exYear}`,
        venue: exVenue,
        organizer: exOrginizer,
      });
    }
  };

  const addJob = () => {
    const data = {
      title: jobTitle,
      width: jobWidth,
      height: jobHeight,
      date: `${jobDay}/${jobMonth}/${jobYear}`,
      sales_value: jobSales,
      description: jobTheme,
      material: jobMaterial,
      purpose: jobWords,
    };
    console.log("PHOTO NAME: ", jobPhoto);
    jobs[jobPhoto.file.name] = data;
    console.log("JOBS: ", jobs);
  };

  const [days, setDays] = useState(
    Array.from({ length: 31 }, (_, index) => index + 1)
  );

  const [months, setMonths] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [years, setYears] = useState([]);
  const currentYear = new Date().getFullYear();
  const startYear = 1950;

  useEffect(() => {
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
  }, []);

  const createGallery = () => {
    const formData = new FormData();
    formData.append("name", fullName.split(" ")[0]);
    formData.append("surname", fullName.split(" ")[1]);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("website", website);
    formData.append("phone", phone);
    formData.append("education", education);
    formData.append("art_type", artType);
    formData.append("style", style);
    formData.append("info", otherInfo);
    formData.append("cv", cv);
    formData.append("avatar", avatar);

    images.forEach((image, i) => {
      formData.append(`gallery`, image.file, image.file.name);
    });

    exs.forEach((ex) => {
      console.log("EX: ", ex);
      formData.append("exhibitions", JSON.stringify(ex));
    });
    formData.append("gallery", "[]");
    formData.append("files_info", JSON.stringify(jobs));
    console.log("FORMDATA: ", formData);
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch("http://localhost:8000/api/v1/users/register", requestOptions)
      .then((response) => response.json())
      .then((data) => history.push("shop"));
  };
  const onChange = (imageList, addUpdateIndex) => {
    console.log("Image List: ", imageList);
    setJobPhoto(imageList[0]);
    setImages(imageList);
  };

  return (
    <Fragment>
      <section className="section-padding contact-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header-left title">
                <h3 className="text-light-black header-title">Get In Touch</h3>
              </div>

              <div className="row clearfix">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-submit"
                      name="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Name Surename"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control form-control-submit"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control form-control-submit"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-submit"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">
                      Select your Avatar
                    </label>
                    <input
                      type="file"
                      name="avatar"
                      onChange={(e) => setAvatar(e.target.files[0])}
                      className="form-control form-control-submit"
                      placeholder="Upload your Avatar"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">
                      Select your CV
                    </label>
                    <input
                      type="file"
                      name="cv"
                      onChange={(e) => setCv(e.target.files[0])}
                      className="form-control form-control-submit"
                      placeholder="Upload your CV"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="form-control form-control-submit"
                      placeholder="Web site link (if available)"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="education"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      className="form-control form-control-submit"
                      placeholder="Education"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      Choose the type of Art you represent: *
                    </label>
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(e) => setArtType(e.target.value)}
                    >
                      <option value={1}>Painting</option>
                      <option value={2}>Photography</option>
                      <option value={3}>Sculpture</option>
                      <option value={4}>Other, please read more</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      State what style features of the work you are mainly
                      presenting.
                    </label>
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(e) => setStyle(e.target.value)}
                    >
                      <option value={1}>Cubism</option>
                      <option value={2}>Futurism</option>
                      <option value={3}>Dadaism</option>
                      <option value={4}>Surrealism</option>
                      <option value={5}>Pop Art</option>
                      <option value={6}>Street Art</option>
                      <option value={7}>Documentary</option>
                      <option value={8}>Modern</option>
                      <option value={9}>Abstractionism</option>
                      <option value={10}>Realism</option>
                      <option value={10}>Portrait</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label>
                    Submit a list of 3 notable exhibitions you've participated
                    in. Please start the list from the most recent exhibition
                  </label>

                  <div>
                    {exs.map((item, index) => {
                      return (
                        <div key={index} className="exhib-section">
                          <div className="container-fluid">
                            <h6 className="mb-0">{item.name}</h6>
                            <div className="row">
                              <div className="col-md-6">
                                <p className="m-0">Type: asasasas</p>
                                <p className="m-0">{item.venue}</p>
                              </div>
                              <div className="col-md-6">
                                <p className="m-0">{item.date}</p>
                                <p className="m-0">
                                  Orginizer:{" "}
                                  {item.orginizer === 1
                                    ? "Individual"
                                    : "Group"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    className="btn-solid with-line mb-3"
                    onClick={() => setModalShow(true)}
                  >
                    Add Exhibitions
                  </button>
                  {Object.values(jobs).map((item, index) => {
                    return (
                      <div key={index} className="exhib-section">
                        <div className="container-fluid">
                          <h6 className="mb-0">{item.title}</h6>
                          <div className="row">
                            <div className="col-md-6">
                              <p className="m-0">Material: {item.material}</p>
                              <p className="m-0">
                                Sales value: {item.sales_value}{" "}
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p className="m-0">Width: {item.width}</p>
                              <p className="m-0">Height: {item.height}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <label>
                    Please enclose with the application the works you would like
                    them to be displayed on the Promotion Art page (up to 10
                    jobs).
                  </label>
                  <button
                    className="btn-solid with-line mb-3"
                    onClick={() => setModalJobShow(true)}
                  >
                    Add Job
                  </button>

                  <Modal show={modalShow} onHide={() => setModalShow(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Exhibitions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="exhibit"
                                value={exName}
                                onChange={(e) => {
                                  setExName(e.target.value);
                                }}
                                className="form-control form-control-submit"
                                placeholder="Name of the exhibit"
                              />
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlSelect1">
                                Type
                              </label>
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                                onChange={(e) => {
                                  setExType(parseInt(e.target.value));
                                }}
                              >
                                <option value={"1"}>Individual</option>
                                <option value={"2"}>Group</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="venue"
                                value={exVenue}
                                onChange={(e) => setExVenue(e.target.value)}
                                className="form-control form-control-submit"
                                placeholder="Venue"
                              />
                            </div>
                            <div className="row">
                              <div class="form-group col-md-4">
                                <label for="exampleFormControlSelect1">
                                  Day
                                </label>
                                <select
                                  class="form-control"
                                  id="exampleFormControlSelect1"
                                  onChange={(e) => setExDay(e.target.value)}
                                >
                                  {days.map((day) => {
                                    return <option>{day}</option>;
                                  })}
                                </select>
                              </div>
                              <div class="form-group col-md-4">
                                <label for="exampleFormControlSelect1">
                                  Month
                                </label>
                                <select
                                  class="form-control"
                                  id="exampleFormControlSelect1"
                                  onChange={(e) => setExMonth(e.target.value)}
                                >
                                  {months.map((month) => {
                                    return <option>{month}</option>;
                                  })}
                                </select>
                              </div>
                              <div class="form-group col-md-4">
                                <label for="exampleFormControlSelect1">
                                  Year
                                </label>
                                <select
                                  class="form-control"
                                  id="exampleFormControlSelect1"
                                  onChange={(e) => setExYear(e.target.value)}
                                >
                                  {years.map((years) => {
                                    return <option>{years}</option>;
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="orginizer"
                                value={exOrginizer}
                                onChange={(e) => setExOrginizer(e.target.value)}
                                className="form-control form-control-submit"
                                placeholder="Orginizer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setModalShow(false)}
                      >
                        Close
                      </Button>
                      <button
                        className="btn-solid with-line"
                        onClick={() => {
                          setModalShow(false);
                          addEx();
                        }}
                      >
                        Add
                      </button>
                    </Modal.Footer>
                  </Modal>

                  <Modal
                    show={modalJobShow}
                    onHide={() => setModalJobShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add Job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="title"
                                value={jobTitle}
                                onChange={(e) => {
                                  setJobTitle(e.target.value);
                                }}
                                className="form-control form-control-submit"
                                placeholder="Title"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="width"
                                value={jobWidth}
                                onChange={(e) => {
                                  setJobWidth(e.target.value);
                                }}
                                className="form-control form-control-submit"
                                placeholder="Width(mm)"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="height"
                                value={jobHeight}
                                onChange={(e) => {
                                  setJobHeight(e.target.value);
                                }}
                                className="form-control form-control-submit"
                                placeholder="Height(mm)"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="mateiral"
                                value={jobMaterial}
                                onChange={(e) => {
                                  setJobMaterial(e.target.value);
                                }}
                                className="form-control form-control-submit"
                                placeholder="Material"
                              />
                            </div>
                            <div className="row">
                              <div class="form-group col-md-4">
                                <label for="exampleFormControlSelect1">
                                  Day
                                </label>
                                <select
                                  class="form-control"
                                  id="exampleFormControlSelect1"
                                  onChange={(e) => setJobDay(e.target.value)}
                                >
                                  {days.map((day) => {
                                    return <option>{day}</option>;
                                  })}
                                </select>
                              </div>
                              <div class="form-group col-md-4">
                                <label for="exampleFormControlSelect1">
                                  Month
                                </label>
                                <select
                                  class="form-control"
                                  id="exampleFormControlSelect1"
                                  onChange={(e) => setJobMonth(e.target.value)}
                                >
                                  {months.map((month) => {
                                    return <option>{month}</option>;
                                  })}
                                </select>
                              </div>
                              <div class="form-group col-md-4">
                                <label for="exampleFormControlSelect1">
                                  Year
                                </label>
                                <select
                                  class="form-control"
                                  id="exampleFormControlSelect1"
                                  onChange={(e) => setJobYear(e.target.value)}
                                >
                                  {years.map((years) => {
                                    return <option>{years}</option>;
                                  })}
                                </select>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlSelect1">
                                Type
                              </label>
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                                onChange={(e) => {
                                  setExType(parseInt(e.target.value));
                                }}
                              >
                                <option value={"1"}>Individual</option>
                                <option value={"2"}>Group</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="salesValue"
                                value={jobSales}
                                onChange={(e) => setJobSales(e.target.value)}
                                className="form-control form-control-submit"
                                placeholder="Sales value"
                              />
                            </div>

                            <div className="form-group">
                              <textarea
                                name="info"
                                value={jobTheme}
                                onChange={(e) => setJobTheme(e.target.value)}
                                className="form-control form-control-submit"
                                placeholder="Short thematic description"
                                style={{ height: "100px" }}
                              />
                            </div>

                            <div className="form-group">
                              <textarea
                                name="info"
                                value={jobWords}
                                onChange={(e) => setJobWords(e.target.value)}
                                className="form-control form-control-submit"
                                placeholder="Words that describe and describe the work of art"
                                style={{ height: "50px" }}
                              />
                            </div>

                            {/* Image upload component */}
                            <ImageUploading
                              multiple
                              value={images}
                              onChange={onChange}
                              maxNumber={maxNumber}
                              dataURLKey="data_url"
                            >
                              {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                              }) => (
                                <div className="upload__image-wrapper">
                                  <button
                                    className="btn-solid with-line mb-3"
                                    style={
                                      isDragging ? { color: "red" } : undefined
                                    }
                                    onClick={onImageUpload}
                                    {...dragProps}
                                  >
                                    Click or Drop here Image
                                  </button>
                                  &nbsp;
                                  {images.length > 0 ? (
                                    <button
                                      className="btn-solid with-line mb-3"
                                      onClick={onImageRemoveAll}
                                    >
                                      Remove all images
                                    </button>
                                  ) : null}
                                  {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                      <img
                                        src={image["data_url"]}
                                        alt=""
                                        width="100"
                                      />
                                      <div className="image-item__btn-wrapper">
                                        <button
                                          className="btn-solid with-line mb-3"
                                          onClick={() => onImageUpdate(index)}
                                        >
                                          Update
                                        </button>
                                        <button
                                          className="btn-solid with-line mb-3"
                                          onClick={() => onImageRemove(index)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </ImageUploading>

                            {/* Image upload component end */}
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setModalShow(false)}
                      >
                        Close
                      </Button>
                      <button
                        className="btn-solid with-line"
                        onClick={() => {
                          addJob();
                          setModalJobShow(false);
                        }}
                      >
                        Add
                      </button>
                    </Modal.Footer>
                  </Modal>

                  <div className="form-group">
                    <textarea
                      name="info"
                      value={otherInfo}
                      onChange={(e) => setOtherInfo(e.target.value)}
                      className="form-control form-control-submit"
                      placeholder="Other important information about your creative activity."
                      style={{ height: "225px" }}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button
                    onClick={() => createGallery()}
                    className="btn-solid with-line"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Content;
