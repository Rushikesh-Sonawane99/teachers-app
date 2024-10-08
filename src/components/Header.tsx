'use client';

import { Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ConfirmationModal from './ConfirmationModal';
import Image from 'next/image';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import accountIcon from './../assets/images/account.svg';
import dynamic from 'next/dynamic';
import { logEvent } from '@/utils/googleAnalytics';
import logoLight from '../../public/images/logo-light.png';
import menuIcon from '../assets/images/menuIcon.svg';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import StyledMenu from './StyledMenu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useDirection } from '../hooks/useDirection';

interface HeaderProps {
  toggleDrawer?: (newOpen: boolean) => () => void;
  openDrawer?: boolean;
}

// Dynamic import for MenuDrawer to avoid SSR issues
const MenuDrawer = dynamic(() => import('./MenuDrawer'), {
  ssr: false,
});

const Header: React.FC<HeaderProps> = ({ toggleDrawer, openDrawer }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const pathname = usePathname();
  const theme = useTheme<any>();

  const [userId, setUserId] = useState<string>('');
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [language, setLanguage] = useState<string>(selectedLanguage);
  const [darkMode, setDarkMode] = useState<string | null>(null);
  const { dir, isRTL } = useDirection();

  // Retrieve stored userId and language
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUserId = localStorage.getItem('userId') as string;
      const storedLanguage = localStorage.getItem('preferredLanguage');
      const storedDarkMode = localStorage.getItem('mui-mode');
      if (storedUserId) setUserId(storedUserId);
      if (storedLanguage) setSelectedLanguage(storedLanguage);
      if (storedDarkMode) setDarkMode(storedDarkMode);
    }
  }, []);

  const handleProfileClick = () => {
    if (pathname !== `/user-profile/${userId}`) {
      router.push(`/user-profile/${userId}`);
      logEvent({
        action: 'my-profile-clicked-header',
        category: 'Dashboard',
        label: 'Profile Clicked',
      });
    }
  };

  const handleLogoutClick = () => {
    router.replace('/logout');
    logEvent({
      action: 'logout-clicked-header',
      category: 'Dashboard',
      label: 'Logout Clicked',
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleDrawer = (newOpen: boolean) => () => {
    setOpenMenu(newOpen);
  };

  // Check if the user has seen the tutorial
  const hasSeenTutorial =
    typeof window !== 'undefined' &&
    window.localStorage.getItem('hasSeenTutorial') === 'true';

  const getMessage = () => {
    if (modalOpen) return t('COMMON.SURE_LOGOUT');
    return '';
  };

  const handleCloseModel = () => {
    setModalOpen(false);
  };

  const logoutOpen = () => {
    handleClose();
    setModalOpen(true);
  };

  return (
    <Box
      sx={{
        height: '64px',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <Box
        className="w-md-100 ps-md-relative"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: hasSeenTutorial ? 'fixed' : 'relative',
          top: '0px',
          zIndex: '999',
          width: '100%',
          bgcolor: theme.palette.warning['A400'],
        }}
      >
        <Stack
          width={'100%'}
          direction="row"
          justifyContent={'space-between'}
          alignItems={'center'}
          height="64px"
          boxShadow={
            darkMode === 'dark'
              ? '0px 1px 3px 0px #ffffff1a'
              : '0px 1px 3px 0px #0000004D'
          }
          className="pl-md-20"
        >
          <Box
            onClick={() => {
              if (openDrawer) {
                if (toggleDrawer) {
                  toggleDrawer(true)();
                }
              } else {
                handleToggleDrawer(true)();
              }
            }}
            mt={'0.5rem'}
            className="display-md-none"
            paddingLeft={'20px'}
            sx={{ marginRight: isRTL ? '20px' : '0px' }}
          >
            <Image
              height={12}
              width={18}
              src={menuIcon}
              alt="menu"
              style={{ cursor: 'pointer' }}
            />
          </Box>

          <Image
            height={40}
            width={44}
            src={logoLight}
            alt="logo"
            onClick={() => router.push('/dashboard')}
            style={{ marginRight: isRTL ? '20px' : '0px' }}
          />

          <Box
            onClick={handleClick}
            sx={{
              cursor: 'pointer',
              position: 'relative',
              marginLeft: isRTL ? '16px' : '0px',
            }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : 'false'}
            paddingRight={'20px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            mt={'0.5rem'}
          >
            <AccountCircleOutlinedIcon
              sx={{ color: theme.palette.warning['A200'] }}
            />
          </Box>

          <StyledMenu
            id="profile-menu"
            MenuListProps={{
              'aria-labelledby': 'profile-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {pathname !== `/user-profile/${userId}` && (
              <MenuItem
                onClick={handleProfileClick}
                disableRipple
                sx={{ 'letter-spacing': 'normal' }}
              >
                <PersonOutlineOutlinedIcon />
                {t('PROFILE.MY_PROFILE')}
              </MenuItem>
            )}
            <MenuItem
              onClick={logoutOpen}
              disableRipple
              sx={{
                'letter-spacing': 'normal',
                color: theme.palette.warning['300'],
              }}
            >
              <LogoutOutlinedIcon
                sx={{ color: theme.palette.warning['300'] }}
              />
              {t('COMMON.LOGOUT')}
            </MenuItem>
          </StyledMenu>
        </Stack>
      </Box>

      <ConfirmationModal
        message={getMessage()}
        handleAction={handleLogoutClick}
        buttonNames={{
          primary: t('COMMON.LOGOUT'),
          secondary: t('COMMON.CANCEL'),
        }}
        handleCloseModal={handleCloseModel}
        modalOpen={modalOpen}
      />

      <MenuDrawer
        toggleDrawer={openDrawer ? toggleDrawer : handleToggleDrawer}
        open={openDrawer ? openDrawer : openMenu}
        language={language}
        setLanguage={setLanguage}
      />
    </Box>
  );
};

export default Header;
