/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Box, Container, Dialog, ImageList, ImageListItem, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Aonerentals from '../../assets/recentprojects/aonerentals.png';
import Aisspace from '../../assets/recentprojects/AISSPACE.png';
import carGarage from '../../assets/recentprojects/cargarage.png';
import Ectro from '../../assets/recentprojects/ectroautos.png';
import digify from '../../assets/recentprojects/digifygarden.png';

import img1 from '../../assets/designportfoilo/marhabatravels2.jpg';
import img2 from '../../assets/designportfoilo/GNM.jpg';
import img3 from '../../assets/designportfoilo/LIfe Care 002.jpg';
import img4 from '../../assets/designportfoilo/marketing poster 1.jpg';
import img5 from '../../assets/designportfoilo/ablaze rate card Print.jpg';
import img6 from '../../assets/designportfoilo/biriyani mix 8x8.jpg';
import img7 from '../../assets/designportfoilo/marhabatravels3.jpg';
import img8 from '../../assets/designportfoilo/nurse4.jpg';
import img9 from '../../assets/designportfoilo/women cell self defence.jpg';
import img10 from '../../assets/designportfoilo/vbvbvb.jpg';




import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { Apps, Brush } from "@material-ui/icons";



const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [toggleValue, setToggleValue] = useState("Software")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [seletedimage, setSelectedImage] = useState()

  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))

  const designs = [
    {
      id: 1,
      img: img1
    },
    {
      id: 2,
      img: img2
    },
    {
      id: 3,
      img: img3
    },
    {
      id: 4,
      img: img4
    },
    {
      id: 5,
      img: img5
    },
    {
      id: 6,
      img: img6
    },
    {
      id: 7,
      img: img7
    },
    {
      id: 8,
      img: img8
    },
    {
      id: 9,
      img: img9
    },
    {
      id: 10,
      img: img10
    },

  ]

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Aone Rentals',
      description: `Built a tool rental management system with React frontend and PHP backend using MySQL for data storage. 
      Responsibilities included frontend development, backend logic implementation, and database management. 
      Demonstrated proficiency in React, PHP, MySQL, and full-stack web development.`,
      alter: 'Tools Management System',
      image: `${Aonerentals}`,
    },
    {
      id: 2,
      title: 'Digify Garden',
      description: `Digify Garden is a platform through which colleges can easily make your garden digital and share it with students.
      This initiative helps colleges to display the data of a particular tree in their garden, which is readily available on this website
      and also helps students to participate in planting more trees and be more involved. Developed using PHP, Mysql `,
      alter: 'Digify garden',
      image: `${digify}`,
    },
    {
      id: 3,
      title: 'Car Garage',
      description: `A Web base Application to Manage Garage for Car Garage, To Manage their vehicles.
      Developed using React js, Php, sql.`,
      alter: 'Car Garage',
      image: `${carGarage}`,
    },
    {
      id: 4,
      title: 'AIS SPACE Website',
      description: `Designed and developed Dynamic website for Incubation center AIS SPACE
      with html,css, js, PHP, mysql.`,
      alter: 'AIS SPACE',
      image: `${Aisspace}`,
    },
    {
      id: 5,
      title: 'Ectro Autos Products eCommerce',
      description: `website using React js, Firebase integrated, admin section has to add products and highlights. Backend developed using Node JS and Mysql. `,
      alter: 'Ectro utos',
      image: `${Ectro}`,
    }
  ]);

  return (
    <section id="works">
      <ToggleButtonGroup
        color="secondary"
        value={toggleValue}
        exclusive
        onChange={(e, newValue) => { console.log(newValue); setToggleValue(newValue) }}
        style={{ justifyContent: 'center', width: "100vw" }}
      >
        <ToggleButton value="Software">{md ? 'Softwares & Web Apps' : <Apps />}</ToggleButton>
        <ToggleButton value="Graphics">{md ? 'Graphics Design' : <Brush />}</ToggleButton>
      </ToggleButtonGroup>
      {toggleValue === "Software" ?
        <Container component="main" className={classes.main} maxWidth="md">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <div className="__img_wrapper">
                <img src={project.image} alt={project.alter} />
              </div>
              <div className="__content_wrapper">
                <h3 className="title">
                  <TextDecrypt text={project.id + '. ' + project.title} />
                </h3>
                <p className="description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </Container> :
        <ImageList
          variant="masonry"
          cols={md ? 4 : 2}
          style={{ width: md ? '90vw' : '70vw', zIndex: -10,margin:"auto" }}
          rowHeight={md ? 300 : 150}
        >
          {designs.map((project) => (
            <ImageListItem key={project.img}>
              <img src={project.img} alt={project.alter} onClick={() => { setSelectedImage(project.img); setDialogOpen(true); console.log("img Clicked"); }} />
            </ImageListItem>
          ))}
        </ImageList>
      }
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} >
        <img src={seletedimage} alt="dialog Image" />
      </Dialog>
    </section>
  );
};
