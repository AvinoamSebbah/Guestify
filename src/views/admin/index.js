import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {
  AdminContainer,
  FormContainer,
  Title,
  SecondTitle,
  InputField,
} from "./index.styled";
import { firestore as db } from "../../firebase-config";

const columns = [
  {
    width: "25%",
    label: "column.full_name", // Utilisation de la clé avec underscore pour la traduction
    dataKey: "fullName",
  },
  {
    width: "25%",
    label: "column.num_guests", // Utilisation de la clé avec underscore pour la traduction
    dataKey: "numGuests",
    numeric: true,
  },
  {
    width: "25%",
    label: "column.confirmed", // Utilisation de la clé avec underscore pour la traduction
    dataKey: "confirm",
    bool: true,
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function rowContent(index, row, searchQuery) {
  if (searchQuery && !row.fullName.toLowerCase().includes(searchQuery)) {
    return null;
  }
  return (
    <React.Fragment>
      {columns.map((column) => {
        return (
          <TableCell
            key={column.dataKey}
            align={column.numeric || column.bool || false ? "center" : "left"}
          >
            {typeof row[column.dataKey] === "boolean" ? (
              row[column.dataKey] ? (
                <Chip label="v" color="success" />
              ) : (
                <Chip label="x" color="error" />
              )
            ) : column.numeric == true ? (
              <Chip label={row[column.dataKey]} />
            ) : (
              row[column.dataKey]
            )}
          </TableCell>
        );
      })}
    </React.Fragment>
  );
}

const AdminPage = () => {
  const { t } = useTranslation(); // Ajout du useTranslation ici
  const [height, setHeight] = useState(window.visualViewport.height);

  const fixedHeaderContent = (invitations) => {
    const totalGuests = invitations.reduce((total, invitation) => {
      if (invitation.confirm) {
        return total + parseInt(invitation.numGuests);
      }
      return total;
    }, 0);
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || column.bool || false ? "center" : "left"}
            style={{ width: column.width }}
            sx={{
              backgroundColor: "#b99570",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {t(column.label)}
            {column.dataKey === "numGuests" && (
              <span style={{ marginLeft: 5 }}>({totalGuests})</span>
            )}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  useEffect(() => {
    const handleResize = () => setHeight(window.visualViewport.height);
    const handleScroll = () => setHeight(window.visualViewport.height);
    window.visualViewport.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.visualViewport.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    // Récupération des données de Firebase
    const fetchData = async () => {
      const data = await db.collection("invitations").orderBy("fullName").get(); // add orderBy clause
      setInvitations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <AdminContainer
      style={{
        height: `${height}px`,
      }}
    >
      <FormContainer>
        <>
          <Title>{t('confirmed_guest_list')}</Title> {/* Traduction du titre avec underscore */}
          <SecondTitle>{t('event_place')}</SecondTitle>
          <Stack
            direction="row"
            spacing={2}
            sx={{ marginBottom: 3, width: "100%" }}
          >
            <InputField
              size="small"
              type="text"
              id="search-input"
              onChange={handleSearch}
              label={t('search')}
            />
          </Stack>
          <Paper sx={{ height: "100%", width: "100%" }}>
            <TableVirtuoso
              data={invitations}
              components={VirtuosoTableComponents}
              fixedHeaderContent={() => fixedHeaderContent(invitations)}
              itemContent={(index, row) => rowContent(index, row, searchQuery)}
              hey={searchQuery}
            />
          </Paper>
        </>
      </FormContainer>
    </AdminContainer>
  );
};

export default AdminPage;
