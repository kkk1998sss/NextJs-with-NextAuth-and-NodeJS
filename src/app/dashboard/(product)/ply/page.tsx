"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
  getKeyValue,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Input,
  Card,
  Spinner,
} from "@nextui-org/react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { plywood } from "../../../lib/dummy.js";


const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

// type User = (typeof products)[0];
type User = (typeof plywood)[0];

const Ply = () => {

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "Unique No", uid: "unique_no", sortable: true },
    { name: "Type", uid: "type" },
    { name: "Size", uid: "size" },
    { name: "Thickness (mm)", uid: "thickness_mm" },
    { name: "Core Material", uid: "core_material" },
    { name: "Grade", uid: "grade" },
    { name: "Common Uses", uid: "common_uses" },
    { name: "HSN No", uid: "HSN_no" },
    { name: "Description", uid: "description" },
    { name: "Price", uid: "price" },
    { name: "Created Date", uid: "created_date" },
    { name: "Created By", uid: "created_by" },
    { name: "Actions", uid: "actions" },
  ];

  const [fetchdata, setData] = useState<any[]>([]); // Initialize with an empty array of type 'any'
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/getdata")
      .then((response) => {
        setIsLoading(false)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // console.log(data);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      // case "name":
      //   return (
      //     <User
      //       avatarProps={{ radius: "lg", src: user.avatar }}
      //       description={user.email}
      //       name={cellValue}
      //     >
      //       {user.email}
      //     </User>
      //   );
      // case "role":
      //   return (
      //     <div className="flex flex-col">
      //       <p className="text-bold text-sm capitalize">{cellValue}</p>
      //       <p className="text-bold text-sm capitalize text-default-400">
      //         {user.team}
      //       </p>
      //     </div>
      //   );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.id]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaRegEye />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <CiEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <MdDeleteOutline />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
    <Card className="mb-2">
      <div className="text-end pb-2">
        <Button onPress={onOpen} color="success" className="text-white">
          Add Items
        </Button>
      </div>
    </Card>
      <div >
        <Table
          aria-label="Controlled table example with dynamic content"
          selectionMode="multiple"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={plywood} isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}>
          
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        <Modal
          size="4xl"
          isOpen={isOpen}
          // placement={"auto"}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add User
                </ModalHeader>
                <ModalBody>
                  <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input size="sm" type="name" label="Name" />
                    <Input size="sm" type="email" label="Email" />
                    <Input size="sm" type="role" label="Role" />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Save
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Ply;
