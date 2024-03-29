import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import ResumePDF from './../../assets/CV MUHAMMED RIYAS SOFTWARE ENGINEER 2024 ___.pdf';
import {
  ResumeIcon
} from '../content/ResumeButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      href= {`${ResumePDF}`}
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
      style={{zIndex:10}}
    >
      <ResumeIcon />
      <Typography component='span'>
        <TextDecrypt text={' Resume'} />
      </Typography>
    </Link>
  );
};
