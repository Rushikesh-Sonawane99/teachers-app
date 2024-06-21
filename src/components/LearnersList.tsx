import BottomDrawer from './BottomDrawer';
import { Box, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DropOutModal from './DropOutModal';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import React, { useEffect } from 'react';
// import Woman2Icon from '@mui/icons-material/Woman2';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { LearnerListProps } from '@/utils/Interfaces';
import ConfirmationModal from './ConfirmationModal';
import { updateCohortMemberStatus } from '@/services/MyClassDetailsService';
import ReactGA from 'react-ga4';
import { showToastMessage } from './Toastify';

type Anchor = 'bottom';

const LearnersList: React.FC<LearnerListProps> = ({
  learnerName,
  isDropout,
  enrollmentId,
  cohortMembershipId,
  statusReason,
  reloadState, 
  setReloadState
}) => {
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [confirmationModalOpen, setConfirmationModalOpen] =
    React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);

    const theme = useTheme<any>();
    const { t } = useTranslation();

  useEffect(()=>{
    if (reloadState) {
      setReloadState(false); 
      // window.location.reload();
    }
  },[reloadState, setReloadState]) 

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, bottom: open });
    };
  

    const handleUnmarkDropout = async () => {
      try {
        setLoading(true);
    
        if (cohortMembershipId) {
          const memberStatus = 'active';
          const membershipId = cohortMembershipId;
    
          const response = await updateCohortMemberStatus({
            memberStatus,
            membershipId,
          });
    
          if (response?.responseCode !== 200 || response?.params?.err) {
            ReactGA.event('unmark-dropout-student-error', { cohortMembershipId: membershipId });
            throw new Error(response.params?.errmsg || 'An error occurred while updating the user.');
          } else {
            ReactGA.event('unmark-dropout-student-successful', {
              cohortMembershipId: membershipId,
            });
            showToastMessage(t('COMMON.LEARNER_UNMARKED_DROPOUT'), 'success');
            setReloadState(true);
          }
        }
      } catch (error) {
        console.log(error);
        showToastMessage(t('COMMON.SOMETHING_WENT_WRONG'), 'error');
      } finally {
        setLoading(false);
      }
    };

  const listItemClick = (event: React.MouseEvent, name: string) => {
    if (name === 'mark-drop-out') {
      setShowModal(true);
    } else if (name === 'unmark-drop-out') {
      handleUnmarkDropout()
    } else {
      setConfirmationModalOpen(true);
    }
    setState({ ...state, bottom: false });
  };

  const handleAction = async () => {
    try {
      setLoading(true);
      if (cohortMembershipId) {
        const memberStatus = 'archived';
        const membershipId = cohortMembershipId;
  
        const response = await updateCohortMemberStatus({
          memberStatus,
          membershipId,
        });
  
        if (response?.responseCode !== 200 || response?.params?.err) {
          ReactGA.event('remove-student-error', { cohortMembershipId: membershipId });
          throw new Error(response.params?.errmsg || 'An error occurred while updating the user.');
        } else {
          ReactGA.event('remove-student-successful', {
            cohortMembershipId: membershipId,
          });
          showToastMessage(t('COMMON.LEARNER_REMOVED'), 'success');
          setReloadState(true)
        }
      }
    } catch (error) {
      console.log(error);
      showToastMessage(t('COMMON.SOMETHING_WENT_WRONG'), 'error');
    } finally {
      setLoading(false);
    }
    setConfirmationModalOpen(false);
    setState({ ...state, bottom: false });
  };

  const handleCloseModel = () => {
    setConfirmationModalOpen(false);
  };

  const handleCloseBottomDrawer = () => {
    setState({ ...state, bottom: false });
  };

  const handleDroppedOutLabelClick = () => {
    console.log('handleDroppedOutLabelClick');
    setShowModal(true);
  };

  const renderCustomContent = () => {
    if (isDropout) {
      return (
        <Box
          sx={{
            padding: '10px 16px 10px 16px',
            mx: '20px',
            borderRadius: '12px',
            bgcolor: theme.palette.success.contrastText,
          }}
        >
          <Typography
            variant="h5"
            color={theme.palette.warning[400]}
            fontWeight="600"
          >
            {t('COMMON.REASON_FOR_DROPOUT')}
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.warning[300]}
            fontWeight="500"
          >
            {statusReason}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <>
      <Box
        px={'18px'}
        mt={2}
        sx={{ borderBottom: `1px solid ${theme.palette.warning['A100']}` }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '15px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            {/* <Box className="box_shadow_center">
              <Woman2Icon
                sx={{ fontSize: '24px', color: theme.palette.warning['300'] }}
              />
            </Box> */}
            <Box>
              <Box
                sx={{
                  fontSize: '16px',
                  color: theme.palette.warning['300'],
                  fontWeight: '600',
                }}
              >
                {learnerName}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  justifyContent: 'left',
                }}
              >
                {/* <Box
                  sx={{ fontSize: '12px', color: theme.palette.warning['400'] }}
                >
                  19 y/o
                </Box> */}
                {isDropout ? (
                  <Box
                    sx={{
                      fontSize: '12px',
                      color: theme.palette.warning['300'],
                      background: theme.palette.error.light,
                      fontWeight: '500',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      padding: '4px 8px',
                    }}
                    onClick={handleDroppedOutLabelClick}
                  >
                    <Box sx={{ marginTop: '1px' }}>Dropped Out</Box>
                    <ErrorOutlineIcon style={{ fontSize: '13px' }} />
                  </Box>
                ) : (
                  <>
                    {/* <FiberManualRecordIcon
                   sx={{
                    fontSize: '9px',
                    color: theme.palette.secondary.contrastText,
                  }}
                /> */}
                    <Box
                      sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        color: theme.palette.warning['400'],
                      }}
                    >
                      {enrollmentId}
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Box>
          <MoreVertIcon
            onClick={toggleDrawer('bottom', true)}
            sx={{ fontSize: '24px', color: theme.palette.warning['300'] }}
          />
        </Box>
      </Box>

      <BottomDrawer
        toggleDrawer={toggleDrawer}
        state={state}
        listItemClick={listItemClick}
        optionList={[
          {
            label: isDropout
              ? t('COMMON.UNMARK_DROP_OUT')
              : t('COMMON.MARK_DROP_OUT'),
            icon: (
              <NoAccountsIcon sx={{ color: theme.palette.warning['300'] }} />
            ),
            name: isDropout ? 'unmark-drop-out' : 'mark-drop-out',
          },
          {
            label: t('COMMON.REMOVE_FROM_CENTER'),
            icon: (
              <DeleteOutlineIcon sx={{ color: theme.palette.warning['300'] }} />
            ),
            name: 'remove-from-center',
          },
        ]}
        renderCustomContent={renderCustomContent}
      />

      {
        isDropout? 
        <DropOutModal
        open={showModal}
        onClose={() => setShowModal(false)}
        cohortMembershipId={cohortMembershipId}
        isButtonAbsent = {true}
        statusReason = {statusReason}
        reloadState={reloadState} 
        setReloadState={setReloadState}
      />
        :
        <DropOutModal
        open={showModal}
        onClose={() => setShowModal(false)}
        cohortMembershipId={cohortMembershipId}
        reloadState={reloadState} 
        setReloadState={setReloadState}
      />
      }
      
      <ConfirmationModal
        message={t('COMMON.SURE_REMOVE')}
        handleAction={handleAction}
        buttonNames={{
          primary: t('COMMON.YES'),
          secondary: t('COMMON.NO_GO_BACK'),
        }}
        handleCloseModel={handleCloseModel}
        modalOpen={confirmationModalOpen}
      />
    </>
  );
};

export default LearnersList;