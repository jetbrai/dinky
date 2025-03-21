/*
 *
 *   Licensed to the Apache Software Foundation (ASF) under one or more
 *   contributor license agreements.  See the NOTICE file distributed with
 *   this work for additional information regarding copyright ownership.
 *   The ASF licenses this file to You under the Apache License, Version 2.0
 *   (the "License"); you may not use this file except in compliance with
 *   the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */

import { CreateBtn } from '@/components/CallBackButton/CreateBtn';
import { EditBtn } from '@/components/CallBackButton/EditBtn';
import { PopconfirmDeleteBtn } from '@/components/CallBackButton/PopconfirmDeleteBtn';
import { PermissionsModal } from '@/pages/AuthCenter/RowPermissions/components/PermissionsModal';
import { queryList } from '@/services/api';
import { handleAddOrUpdate, handleRemoveById } from '@/services/BusinessCrud';
import { PROTABLE_OPTIONS_PUBLIC } from '@/services/constants';
import { API_CONSTANTS } from '@/services/endpoints';
import { RowPermissions } from '@/types/AuthCenter/data.d';
import { InitRowPermissionsState } from '@/types/AuthCenter/init.d';
import { RowPermissionsState } from '@/types/AuthCenter/state.d';
import { getTenantByLocalStorage } from '@/utils/function';
import { l } from '@/utils/intl';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import React, { useRef, useState } from 'react';

const PermissionsProTable: React.FC = () => {
  const [rowPermissions, setRowPermissions] =
    useState<RowPermissionsState>(InitRowPermissionsState);

  const actionRef = useRef<ActionType>();

  const executeAndCallbackRefresh = async (callback: () => Promise<void>) => {
    setRowPermissions((prevState) => ({ ...prevState, loading: true }));
    await callback();
    setRowPermissions((prevState) => ({ ...prevState, loading: false }));
    actionRef.current?.reload?.();
  };

  /**
   * delete role by id
   * @param id role id
   */
  const handleDeleteSubmit = async (id: number) => {
    await executeAndCallbackRefresh(async () => {
      await handleRemoveById(API_CONSTANTS.ROW_PERMISSIONS_DELETE, id);
    });
  };

  /**
   * add or update role submit callback
   * @param value
   */
  const handleAddOrUpdateSubmit = async (value: any) => {
    await executeAndCallbackRefresh(async () => {
      await handleAddOrUpdate(
        API_CONSTANTS.ROW_PERMISSIONS,
        {
          ...value,
          tenantId: getTenantByLocalStorage()
        },
        () => {},
        () => setRowPermissions((prevState) => ({ ...prevState, addedRowPermissionsOpen: false }))
      );
    });
  };

  /**
   * edit
   * @param record
   */
  const handleEditVisible = (record: Partial<RowPermissions>) => {
    setRowPermissions((prevState) => ({
      ...prevState,
      value: record,
      editRowPermissionsOpen: false
    }));
  };

  /**
   * cancel
   */
  const handleCancel = () => {
    setRowPermissions((prevState) => ({
      ...prevState,
      addedRowPermissionsOpen: false,
      editRowPermissionsOpen: false
    }));
  };

  /**
   * query list
   * @type {({dataIndex: string, title: any} | {sorter: boolean, dataIndex: string, title: any} | {sorter: boolean, dataIndex: string, title: any} | {hideInSearch: boolean, dataIndex: string, title: any, ellipsis: boolean} | {sorter: boolean, dataIndex: string, valueType: string, title: any} | {sorter: boolean, dataIndex: string, valueType: string, title: any} | {dataIndex: string, valueType: string, width: string, title: any, render: (_, record) => JSX.Element[]})[]}
   */
  const columns: ProColumns<RowPermissions>[] = [
    {
      title: l('role.roleCode'),
      dataIndex: 'roleCode'
    },
    {
      title: l('role.roleName'),
      dataIndex: 'roleName'
    },
    {
      title: l('rowPermissions.tableName'),
      dataIndex: 'tableName',
      copyable: true
    },

    {
      title: l('rowPermissions.expression'),
      dataIndex: 'expression',
      ellipsis: true,
      copyable: true
    },
    {
      title: l('global.table.createTime'),
      dataIndex: 'createTime',
      hideInSearch: true,
      sorter: true,
      valueType: 'dateTime'
    },
    {
      title: l('global.table.updateTime'),
      dataIndex: 'updateTime',
      sorter: true,
      hideInSearch: true,
      valueType: 'dateTime'
    },
    {
      title: l('global.table.operate'),
      dataIndex: 'option',
      valueType: 'option',
      width: '10vh',
      render: (_: any, record: RowPermissions) => [
        <EditBtn key={`${record.id}_edit`} onClick={() => handleEditVisible(record)} />,
        <PopconfirmDeleteBtn
          key={`${record.id}_delete`}
          onClick={() => handleDeleteSubmit(record.id)}
          description={l('rowPermissions.deleteConfirm')}
        />
      ]
    }
  ];

  /**
   * render
   */
  return (
    <>
      <ProTable<RowPermissions>
        {...PROTABLE_OPTIONS_PUBLIC}
        headerTitle={l('rowPermissions.management')}
        actionRef={actionRef}
        loading={rowPermissions.loading}
        toolBarRender={() => [
          <CreateBtn
            key='createBtn'
            onClick={() =>
              setRowPermissions((prevState) => ({ ...prevState, addedRowPermissionsOpen: true }))
            }
          />
        ]}
        request={(params: any, sorter: any, filter: any) =>
          queryList(API_CONSTANTS.ROW_PERMISSIONS, {
            ...params,
            sorter,
            filter
          })
        }
        columns={columns}
      />

      {/* added row Permissions */}
      <PermissionsModal
        onSubmit={(value) => handleAddOrUpdateSubmit(value)}
        onCancel={() => handleCancel()}
        modalVisible={rowPermissions.addedRowPermissionsOpen}
        values={{}}
      />

      {/* modify row Permissions */}
      <PermissionsModal
        onSubmit={(value) => handleAddOrUpdateSubmit(value)}
        onCancel={() => handleCancel()}
        modalVisible={rowPermissions.editRowPermissionsOpen}
        values={rowPermissions.value}
      />
    </>
  );
};

export default PermissionsProTable;
