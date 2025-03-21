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

/**
 * the  interface api constants
 */
export enum API_CONSTANTS {
  // --- user ---
  // login path
  LOGIN_PATH = '/user/login',
  TOKEN_INFO = '/api/tokenInfo',
  LOGIN_RECORD = '/api/log/loginRecord',
  OPERATE_LOG = '/api/log/operateLog',
  // user login
  LOGIN = '/api/login',
  // current user info
  CURRENT_USER = '/api/current',
  // logout
  LOGOUT = '/api/outLogin',
  // choose tenant
  CHOOSE_TENANT = '/api/chooseTenant',
  // user list
  USER = '/api/user',
  USER_RECOVERY = '/api/user/recovery',
  USER_RESET_PASSWORD = '/api/user/resetPassword',
  // enable user
  USER_ENABLE = '/api/user/enable',
  // delete user
  USER_DELETE = '/api/user/delete',
  // user change password
  USER_MODIFY_PASSWORD = '/api/user/modifyPassword',
  // GRANT USER TO role
  USER_ASSIGN_ROLE = '/api/user/assignRole',
  // QUERY roles by userid
  GET_ROLES_BY_USERID = '/api/role/getRolesAndIdsByUserId',

  // --- tenant ---
  // tenant list
  TENANT = '/api/tenant',
  // assign user to tenant
  ASSIGN_USER_TO_TENANT = '/api/tenant/assignUserToTenant',
  // delete tenant
  TENANT_DELETE = '/api/tenant/delete',
  // get user list by tenantId
  GET_USER_LIST_BY_TENANTID = '/api/user/getUserListByTenantId',
  //tenant users
  TENANT_USERS = '/api/tenant/getUsersByTenantId',
  USER_SET_TENANT_ADMIN = '/api/user/updateUserToTenantAdmin',

  // --- role ---
  // role list
  ROLE = '/api/role',
  ROLE_ADDED_OR_UPDATE = '/api/role/addedOrUpdateRole',
  ROLE_DELETE = '/api/role/delete',
  ROLE_ASSIGN_MENU = '/api/roleMenu/assignMenuToRole',
  ROLE_MENU_LIST = '/api/menu/roleMenus',
  ROLE_USER_LIST = '/api/role/getUserListByRoleId',

  // menu
  MENU_ADD_OR_UPDATE = '/api/menu/addOrUpdate',
  MENU_DELETE = '/api/menu/delete',
  MENU_TREE = '/api/menu/tree',
  MENU_LIST = '/api/menu/listMenus',

  // --- row Permissions ---
  // row permissions list
  ROW_PERMISSIONS = '/api/rowPermissions',
  // row permissions delete
  ROW_PERMISSIONS_DELETE = '/api/rowPermissions/delete',

  // --- global variable ---
  // global variable list
  GLOBAL_VARIABLE = '/api/fragment',
  // delete global variable  by id
  GLOBAL_VARIABLE_DELETE = '/api/fragment/delete',
  // global variable enable or disable
  GLOBAL_VARIABLE_ENABLE = '/api/fragment/enable',

  // --- registries  center ---

  // ----cluster instance
  // cluster instance list
  CLUSTER_INSTANCE = '/api/cluster',
  CLUSTER_INSTANCE_ENABLE = '/api/cluster/enable',
  CLUSTER_INSTANCE_DELETE = '/api/cluster/delete',
  CLUSTER_INSTANCE_HEARTBEATS = '/api/cluster/heartbeats',
  CLUSTER_INSTANCE_RECYCLE = '/api/cluster/recycle',
  CLUSTER_CONFIGURATION_START = '/api/cluster/deploySessionClusterInstance',
  // cluster configuration list
  CLUSTER_CONFIGURATION = '/api/clusterConfiguration',
  CLUSTER_CONFIGURATION_DELETE = '/api/clusterConfiguration/delete',
  CLUSTER_CONFIGURATION_ENABLE = '/api/clusterConfiguration/enable',
  CLUSTER_CONFIGURATION_TEST = '/api/clusterConfiguration/testConnect',

  // datasource registries list
  DATASOURCE = '/api/database',
  // datasource registries delete
  DATASOURCE_DELETE = '/api/database/delete',
  // datasource registries enable or disable
  DATASOURCE_ENABLE = '/api/database/enable',
  // datasource registries test
  DATASOURCE_TEST = '/api/database/testConnect',
  // datasource  checkHeartBeat By Id
  DATASOURCE_CHECK_HEARTBEAT_BY_ID = '/api/database/checkHeartBeatByDataSourceId',
  // copy datasource
  DATASOURCE_COPY = '/api/database/copyDatabase',
  // get schema by datasource id
  DATASOURCE_GET_SCHEMA_TABLES = '/api/database/getSchemasAndTables',
  DATASOURCE_GET_COLUMNS_BY_TABLE = '/api/database/listColumns',
  DATASOURCE_GET_GEN_SQL = '/api/database/getSqlGeneration',
  DATASOURCE_QUERY_DATA = '/api/database/queryData',

  // document list
  DOCUMENT = '/api/document',
  // delete document by id
  DOCUMENT_DELETE = '/api/document/delete',
  // document enable or disable
  DOCUMENT_ENABLE = '/api/document/enable',

  // ---- alert instance ----
  // alert instance list
  ALERT_INSTANCE = '/api/alertInstance',
  // delete alert instance by id
  ALERT_INSTANCE_DELETE = '/api/alertInstance/delete',
  // alert instance enable or disable
  ALERT_INSTANCE_ENABLE = '/api/alertInstance/enable',
  // alert instance list all
  ALERT_INSTANCE_LIST_ENABLE_ALL = '/api/alertInstance/listEnabledAll',

  // ---- alert group ----
  ALERT_GROUP = '/api/alertGroup',
  // delete alert group by id
  ALERT_GROUP_DELETE = '/api/alertGroup/delete',
  // alert group enable or disable
  ALERT_GROUP_ENABLE = '/api/alertGroup/enable',

  // ---- get git project list----
  GIT_PROJECT = '/api/git/getProjectList',
  // ---- saveOrUpdate ----
  GIT_SAVE_UPDATE = '/api/git/saveOrUpdate',
  // dragendSortProject
  GIT_DRAGEND_SORT_PROJECT = '/api/git/dragendSortProject',
  // dragendSort jar
  GIT_DRAGEND_SORT_JAR = '/api/git/dragendSortJar',
  // ---- get git branch ----
  GIT_BRANCH = '/api/git/getBranchList',
  // ---- DELETE project ----
  GIT_PROJECT_DELETE = '/api/git/deleteProject',
  // ---- update project State  ----
  GIT_PROJECT_ENABLE = '/api/git/updateEnable',
  // ---- get project details by id ----
  GIT_PROJECT_CODE_TREE = '/api/git/getProjectCode',
  // ---- get project build by id ----
  GIT_PROJECT_BUILD = '/api/git/build',
  // ---- get project build logs by id----
  GIT_PROJECT_BUILD_STEP_LOGS = '/api/git/build-step-logs',

  // UDF template
  UDF_TEMPLATE = '/api/udf/template/list',
  // UDF template add or update
  UDF_TEMPLATE_ADD_UPDATE = '/api/udf/template',
  // UDF template delete
  UDF_TEMPLATE_DELETE = '/api/udf/template/delete',
  // UDF template enable or disable
  UDF_TEMPLATE_ENABLE = '/api/udf/template/enable',
  UDF_TEMPLATE_TREE = '/api/udf/template/tree',

  // system config center
  // global config list
  SYSTEM_GET_ALL_CONFIG = '/api/sysConfig/getAll',
  // update global config by key
  SYSTEM_MODIFY_CONFIG = '/api/sysConfig/modifyConfig',
  //-- system root logs
  SYSTEM_ROOT_LOG = '/api/system/getRootLog',
  // -- get logs list
  SYSTEM_ROOT_LOG_LIST = '/api/system/listLogDir',
  // -- READ LOG file
  SYSTEM_ROOT_LOG_READ = '/api/system/readFile',

  // process list
  PROCESS_LIST = '/api/process/listAllProcess',

  // ---- devops
  GET_JOB_LIST = '/api/jobInstance',
  GET_JOB_BY_ID = '/api/jobInstance/getOneById',
  GET_JOB_DETAIL = '/api/jobInstance/getJobInfoDetail',
  GET_JOB_VERSION = '/api/task/version',
  GET_JOBMANAGER_LOG = 'api/jobInstance/getJobManagerLog',
  GET_JOBMANAGER_STDOUT = 'api/jobInstance/getJobManagerStdOut',
  GET_JOBMANAGER_THREAD_DUMP = 'api/jobInstance/getJobManagerThreadDump',
  GET_TASKMANAGER_LIST = 'api/jobInstance/getTaskManagerList',
  GET_TASKMANAGER_LOG = 'api/jobInstance/getTaskManagerLog',
  CANCEL_JOB = '/api/studio/cancel',
  OFFLINE_TASK = '/api/task/offLineTask',
  RESTART_TASK = '/api/task/restartTask',
  RESTART_TASK_FROM_CHECKPOINT = '/api/task/selectSavePointRestartTask',
  GET_SAVEPOINTS = '/api/savepoints',

  // -- LDAP
  GET_LDAP_ENABLE = '/api/ldap/ldapEnableStatus',
  LDAP_TEST_CONNECT = '/api/ldap/testConnection',
  LDAP_TEST_LOGIN = '/api/ldap/testLogin',
  LDAP_LIST_USER = '/api/ldap/listUser',
  LDAP_IMPORT_USERS = '/api/ldap/importUsers',

  // -- home
  GET_STATUS_COUNT = 'api/jobInstance/getStatusCount',
  GET_RESOURCE_OVERVIEW = '/api/home/getResourceOverview',
  GET_JOB_STATUS_OVERVIEW = '/api/home/getJobStatusOverview',
  GET_JOB_TYPE_OVERVIEW = '/api/home/getJobTypeOverview',
  GET_JOB_MODEL_OVERVIEW = '/api/home/getJobModelOverview',

  // monitor
  MONITOR_GET_SYSTEM_DATA = '/api/monitor/getSysData',
  MONITOR_GET_LAST_DATA = '/api/monitor/getLastUpdateData',
  JOB_METRICS = '/api/monitor/jobMetrics',

  SAVE_FLINK_METRICS = '/api/monitor/saveFlinkMetrics',
  GET_METRICS_LAYOUT = '/api/monitor/getMetricsLayout',

  // flink
  FLINK_PROXY = '/api/flink',

  // resource
  RESOURCE_SHOW_TREE = '/api/resource/showByTree',
  RESOURCE_GET_CONTENT_BY_ID = '/api/resource/getContentByResourceId',
  RESOURCE_REMOVE = '/api/resource/remove',
  RESOURCE_CREATE_FOLDER = '/api/resource/createFolder',
  RESOURCE_RENAME = '/api/resource/rename',
  RESOURCE_UPLOAD = '/api/resource/uploadFile',

  // catalog
  DELETE_CATALOGUE_BY_ID_URL = '/api/catalogue/deleteCatalogueById',
  CREATE_TASK_URL = '/api/catalogue/createTask',
  SAVE_OR_UPDATE_CATALOGUE_URL = '/api/catalogue/saveOrUpdateCatalogue',
  COPY_TASK_URL = '/api/catalogue/copyTask',
  MOVE_CATALOGUE_URL = '/api/catalogue/moveCatalogue'
}
