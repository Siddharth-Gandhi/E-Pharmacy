import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const medicines = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/static/images/medicines/medicine_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/static/images/medicines/medicine_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/static/images/medicines/medicine_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/static/images/medicines/medicine_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/static/images/medicines/medicine_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];

const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${medicines.length} in total`}
      title="Latest Medicines"
    />
    <Divider />
    <List>
      {medicines.map((medicine, i) => (
        <ListItem
          divider={i < medicines.length - 1}
          key={medicine.id}
        >
          <ListItemAvatar>
            <img
              alt={medicine.name}
              src={medicine.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={medicine.name}
            secondary={`Updated ${medicine.updatedAt.fromNow()}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestProducts;
