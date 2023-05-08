import React from 'react'
import { Container, createStyles, Group, Header, rem } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.svg'

type ActionType = Record<string, boolean>

export const HEADER_HEIGHT = rem(85)

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 1
  },

  header: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  logoContainer: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    left: 0
  },
  logo: {
    margin: `${rem(8)} ${rem(12)}`,
    lineHeight: 1,
    fontSize: theme.fontSizes.xl,
    fontWeight: 600
  },
  link: {
    display: 'block',
    padding: `${rem(8)} ${rem(15)}`,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500
  },

  linkActive: {
    display: 'block',
    padding: `${rem(8)} ${rem(15)}`,
    textDecoration: 'none',
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500
  }
}))

interface HeaderResponsiveProps {
  links: Array<{ link: string, label: string }>
}

export const Head: React.FC<HeaderResponsiveProps> = ({ links }: HeaderResponsiveProps) => {
  const { classes } = useStyles()
  const setAction = ({ isActive }: ActionType): string => isActive ? classes.linkActive : classes.link

  const items = links.map((link, index) => (
      <NavLink
          key={index + 1} to={link.link}
          className={setAction}
      >
        {link.label}
      </NavLink>
  ))

  return (
        <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
            <Container className={classes.header}>
              <div className={classes.logoContainer}>
                <img src={logo} alt="logo" />
                <span className={classes.logo}>Jobored</span>
              </div>
              <Group spacing={5}>
                {items}
              </Group>
            </Container>
        </Header>
  )
}
