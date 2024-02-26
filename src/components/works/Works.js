/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Aonerentals from '../../assets/recentprojects/aonerentals.png';
import Aisspace from '../../assets/recentprojects/AISSPACE.png';
import carGarage from '../../assets/recentprojects/cargarage.png';
import Ectro from '../../assets/recentprojects/ectroautos.png';
import digify from '../../assets/recentprojects/digifygarden.png';



const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
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
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
