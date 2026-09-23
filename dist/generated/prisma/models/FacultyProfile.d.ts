import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FacultyProfile
 *
 */
export type FacultyProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$FacultyProfilePayload>;
export type AggregateFacultyProfile = {
    _count: FacultyProfileCountAggregateOutputType | null;
    _min: FacultyProfileMinAggregateOutputType | null;
    _max: FacultyProfileMaxAggregateOutputType | null;
};
export type FacultyProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    facultyId: string | null;
    department: $Enums.Department | null;
    isDepartmentHead: boolean | null;
    designation: string | null;
    phone: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type FacultyProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    facultyId: string | null;
    department: $Enums.Department | null;
    isDepartmentHead: boolean | null;
    designation: string | null;
    phone: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type FacultyProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    facultyId: number;
    department: number;
    isDepartmentHead: number;
    designation: number;
    phone: number;
    avatarUrl: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type FacultyProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    facultyId?: true;
    department?: true;
    isDepartmentHead?: true;
    designation?: true;
    phone?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type FacultyProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    facultyId?: true;
    department?: true;
    isDepartmentHead?: true;
    designation?: true;
    phone?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type FacultyProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    facultyId?: true;
    department?: true;
    isDepartmentHead?: true;
    designation?: true;
    phone?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type FacultyProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyProfile to aggregate.
     */
    where?: Prisma.FacultyProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: Prisma.FacultyProfileOrderByWithRelationInput | Prisma.FacultyProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FacultyProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FacultyProfiles
    **/
    _count?: true | FacultyProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FacultyProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FacultyProfileMaxAggregateInputType;
};
export type GetFacultyProfileAggregateType<T extends FacultyProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateFacultyProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFacultyProfile[P]> : Prisma.GetScalarType<T[P], AggregateFacultyProfile[P]>;
};
export type FacultyProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FacultyProfileWhereInput;
    orderBy?: Prisma.FacultyProfileOrderByWithAggregationInput | Prisma.FacultyProfileOrderByWithAggregationInput[];
    by: Prisma.FacultyProfileScalarFieldEnum[] | Prisma.FacultyProfileScalarFieldEnum;
    having?: Prisma.FacultyProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacultyProfileCountAggregateInputType | true;
    _min?: FacultyProfileMinAggregateInputType;
    _max?: FacultyProfileMaxAggregateInputType;
};
export type FacultyProfileGroupByOutputType = {
    id: string;
    userId: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead: boolean;
    designation: string | null;
    phone: string | null;
    avatarUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: FacultyProfileCountAggregateOutputType | null;
    _min: FacultyProfileMinAggregateOutputType | null;
    _max: FacultyProfileMaxAggregateOutputType | null;
};
export type GetFacultyProfileGroupByPayload<T extends FacultyProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FacultyProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FacultyProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FacultyProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FacultyProfileGroupByOutputType[P]>;
}>>;
export type FacultyProfileWhereInput = {
    AND?: Prisma.FacultyProfileWhereInput | Prisma.FacultyProfileWhereInput[];
    OR?: Prisma.FacultyProfileWhereInput[];
    NOT?: Prisma.FacultyProfileWhereInput | Prisma.FacultyProfileWhereInput[];
    id?: Prisma.StringFilter<"FacultyProfile"> | string;
    userId?: Prisma.StringFilter<"FacultyProfile"> | string;
    facultyId?: Prisma.StringFilter<"FacultyProfile"> | string;
    department?: Prisma.EnumDepartmentFilter<"FacultyProfile"> | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFilter<"FacultyProfile"> | boolean;
    designation?: Prisma.StringNullableFilter<"FacultyProfile"> | string | null;
    phone?: Prisma.StringNullableFilter<"FacultyProfile"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"FacultyProfile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FacultyProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FacultyProfile"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"FacultyProfile"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    createdExams?: Prisma.ExamListRelationFilter;
    markedAttendances?: Prisma.AttendanceListRelationFilter;
};
export type FacultyProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    facultyId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    isDepartmentHead?: Prisma.SortOrder;
    designation?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    createdExams?: Prisma.ExamOrderByRelationAggregateInput;
    markedAttendances?: Prisma.AttendanceOrderByRelationAggregateInput;
};
export type FacultyProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    facultyId?: string;
    AND?: Prisma.FacultyProfileWhereInput | Prisma.FacultyProfileWhereInput[];
    OR?: Prisma.FacultyProfileWhereInput[];
    NOT?: Prisma.FacultyProfileWhereInput | Prisma.FacultyProfileWhereInput[];
    department?: Prisma.EnumDepartmentFilter<"FacultyProfile"> | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFilter<"FacultyProfile"> | boolean;
    designation?: Prisma.StringNullableFilter<"FacultyProfile"> | string | null;
    phone?: Prisma.StringNullableFilter<"FacultyProfile"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"FacultyProfile"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FacultyProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FacultyProfile"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"FacultyProfile"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    createdExams?: Prisma.ExamListRelationFilter;
    markedAttendances?: Prisma.AttendanceListRelationFilter;
}, "id" | "userId" | "facultyId">;
export type FacultyProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    facultyId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    isDepartmentHead?: Prisma.SortOrder;
    designation?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.FacultyProfileCountOrderByAggregateInput;
    _max?: Prisma.FacultyProfileMaxOrderByAggregateInput;
    _min?: Prisma.FacultyProfileMinOrderByAggregateInput;
};
export type FacultyProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.FacultyProfileScalarWhereWithAggregatesInput | Prisma.FacultyProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.FacultyProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FacultyProfileScalarWhereWithAggregatesInput | Prisma.FacultyProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FacultyProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"FacultyProfile"> | string;
    facultyId?: Prisma.StringWithAggregatesFilter<"FacultyProfile"> | string;
    department?: Prisma.EnumDepartmentWithAggregatesFilter<"FacultyProfile"> | $Enums.Department;
    isDepartmentHead?: Prisma.BoolWithAggregatesFilter<"FacultyProfile"> | boolean;
    designation?: Prisma.StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"FacultyProfile"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FacultyProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FacultyProfile"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"FacultyProfile"> | Date | string | null;
};
export type FacultyProfileCreateInput = {
    id?: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead?: boolean;
    designation?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutFacultyProfileInput;
    createdExams?: Prisma.ExamCreateNestedManyWithoutCreatedByInput;
    markedAttendances?: Prisma.AttendanceCreateNestedManyWithoutMarkedByInput;
};
export type FacultyProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead?: boolean;
    designation?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdExams?: Prisma.ExamUncheckedCreateNestedManyWithoutCreatedByInput;
    markedAttendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutMarkedByInput;
};
export type FacultyProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutFacultyProfileNestedInput;
    createdExams?: Prisma.ExamUpdateManyWithoutCreatedByNestedInput;
    markedAttendances?: Prisma.AttendanceUpdateManyWithoutMarkedByNestedInput;
};
export type FacultyProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdExams?: Prisma.ExamUncheckedUpdateManyWithoutCreatedByNestedInput;
    markedAttendances?: Prisma.AttendanceUncheckedUpdateManyWithoutMarkedByNestedInput;
};
export type FacultyProfileCreateManyInput = {
    id?: string;
    userId: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead?: boolean;
    designation?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type FacultyProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FacultyProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FacultyProfileNullableScalarRelationFilter = {
    is?: Prisma.FacultyProfileWhereInput | null;
    isNot?: Prisma.FacultyProfileWhereInput | null;
};
export type FacultyProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    facultyId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    isDepartmentHead?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type FacultyProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    facultyId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    isDepartmentHead?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type FacultyProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    facultyId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    isDepartmentHead?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type FacultyProfileCreateNestedOneWithoutMarkedAttendancesInput = {
    create?: Prisma.XOR<Prisma.FacultyProfileCreateWithoutMarkedAttendancesInput, Prisma.FacultyProfileUncheckedCreateWithoutMarkedAttendancesInput>;
    connectOrCreate?: Prisma.FacultyProfileCreateOrConnectWithoutMarkedAttendancesInput;
    connect?: Prisma.FacultyProfileWhereUniqueInput;
};
export type FacultyProfileUpdateOneWithoutMarkedAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.FacultyProfileCreateWithoutMarkedAttendancesInput, Prisma.FacultyProfileUncheckedCreateWithoutMarkedAttendancesInput>;
    connectOrCreate?: Prisma.FacultyProfileCreateOrConnectWithoutMarkedAttendancesInput;
    upsert?: Prisma.FacultyProfileUpsertWithoutMarkedAttendancesInput;
    disconnect?: Prisma.FacultyProfileWhereInput | boolean;
    delete?: Prisma.FacultyProfileWhereInput | boolean;
    connect?: Prisma.FacultyProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FacultyProfileUpdateToOneWithWhereWithoutMarkedAttendancesInput, Prisma.FacultyProfileUpdateWithoutMarkedAttendancesInput>, Prisma.FacultyProfileUncheckedUpdateWithoutMarkedAttendancesInput>;
};
export type FacultyProfileCreateNestedOneWithoutCreatedExamsInput = {
    create?: Prisma.XOR<Prisma.FacultyProfileCreateWithoutCreatedExamsInput, Prisma.FacultyProfileUncheckedCreateWithoutCreatedExamsInput>;
    connectOrCreate?: Prisma.FacultyProfileCreateOrConnectWithoutCreatedExamsInput;
    connect?: Prisma.FacultyProfileWhereUniqueInput;
};
export type FacultyProfileUpdateOneWithoutCreatedExamsNestedInput = {
    create?: Prisma.XOR<Prisma.FacultyProfileCreateWithoutCreatedExamsInput, Prisma.FacultyProfileUncheckedCreateWithoutCreatedExamsInput>;
    connectOrCreate?: Prisma.FacultyProfileCreateOrConnectWithoutCreatedExamsInput;
    upsert?: Prisma.FacultyProfileUpsertWithoutCreatedExamsInput;
    disconnect?: Prisma.FacultyProfileWhereInput | boolean;
    delete?: Prisma.FacultyProfileWhereInput | boolean;
    connect?: Prisma.FacultyProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FacultyProfileUpdateToOneWithWhereWithoutCreatedExamsInput, Prisma.FacultyProfileUpdateWithoutCreatedExamsInput>, Prisma.FacultyProfileUncheckedUpdateWithoutCreatedExamsInput>;
};
export type EnumDepartmentFieldUpdateOperationsInput = {
    set?: $Enums.Department;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type FacultyProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FacultyProfileCreateWithoutUserInput, Prisma.FacultyProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.FacultyProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.FacultyProfileWhereUniqueInput;
};
export type FacultyProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FacultyProfileCreateWithoutUserInput, Prisma.FacultyProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.FacultyProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.FacultyProfileWhereUniqueInput;
};
export type FacultyProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FacultyProfileCreateWithoutUserInput, Prisma.FacultyProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.FacultyProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.FacultyProfileUpsertWithoutUserInput;
    disconnect?: Prisma.FacultyProfileWhereInput | boolean;
    delete?: Prisma.FacultyProfileWhereInput | boolean;
    connect?: Prisma.FacultyProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FacultyProfileUpdateToOneWithWhereWithoutUserInput, Prisma.FacultyProfileUpdateWithoutUserInput>, Prisma.FacultyProfileUncheckedUpdateWithoutUserInput>;
};
export type FacultyProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FacultyProfileCreateWithoutUserInput, Prisma.FacultyProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.FacultyProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.FacultyProfileUpsertWithoutUserInput;
    disconnect?: Prisma.FacultyProfileWhereInput | boolean;
    delete?: Prisma.FacultyProfileWhereInput | boolean;
    connect?: Prisma.FacultyProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FacultyProfileUpdateToOneWithWhereWithoutUserInput, Prisma.FacultyProfileUpdateWithoutUserInput>, Prisma.FacultyProfileUncheckedUpdateWithoutUserInput>;
};
export type FacultyProfileCreateWithoutMarkedAttendancesInput = {
    id?: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead?: boolean;
    designation?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutFacultyProfileInput;
    createdExams?: Prisma.ExamCreateNestedManyWithoutCreatedByInput;
};
export type FacultyProfileUncheckedCreateWithoutMarkedAttendancesInput = {
    id?: string;
    userId: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead?: boolean;
    designation?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdExams?: Prisma.ExamUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type FacultyProfileCreateOrConnectWithoutMarkedAttendancesInput = {
    where: Prisma.FacultyProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FacultyProfileCreateWithoutMarkedAttendancesInput, Prisma.FacultyProfileUncheckedCreateWithoutMarkedAttendancesInput>;
};
export type FacultyProfileUpsertWithoutMarkedAttendancesInput = {
    update: Prisma.XOR<Prisma.FacultyProfileUpdateWithoutMarkedAttendancesInput, Prisma.FacultyProfileUncheckedUpdateWithoutMarkedAttendancesInput>;
    create: Prisma.XOR<Prisma.FacultyProfileCreateWithoutMarkedAttendancesInput, Prisma.FacultyProfileUncheckedCreateWithoutMarkedAttendancesInput>;
    where?: Prisma.FacultyProfileWhereInput;
};
export type FacultyProfileUpdateToOneWithWhereWithoutMarkedAttendancesInput = {
    where?: Prisma.FacultyProfileWhereInput;
    data: Prisma.XOR<Prisma.FacultyProfileUpdateWithoutMarkedAttendancesInput, Prisma.FacultyProfileUncheckedUpdateWithoutMarkedAttendancesInput>;
};
export type FacultyProfileUpdateWithoutMarkedAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutFacultyProfileNestedInput;
    createdExams?: Prisma.ExamUpdateManyWithoutCreatedByNestedInput;
};
export type FacultyProfileUncheckedUpdateWithoutMarkedAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdExams?: Prisma.ExamUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type FacultyProfileCreateWithoutCreatedExamsInput = {
    id?: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead?: boolean;
    designation?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutFacultyProfileInput;
    markedAttendances?: Prisma.AttendanceCreateNestedManyWithoutMarkedByInput;
};
export type FacultyProfileUncheckedCreateWithoutCreatedExamsInput = {
    id?: string;
    userId: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead?: boolean;
    designation?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    markedAttendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutMarkedByInput;
};
export type FacultyProfileCreateOrConnectWithoutCreatedExamsInput = {
    where: Prisma.FacultyProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FacultyProfileCreateWithoutCreatedExamsInput, Prisma.FacultyProfileUncheckedCreateWithoutCreatedExamsInput>;
};
export type FacultyProfileUpsertWithoutCreatedExamsInput = {
    update: Prisma.XOR<Prisma.FacultyProfileUpdateWithoutCreatedExamsInput, Prisma.FacultyProfileUncheckedUpdateWithoutCreatedExamsInput>;
    create: Prisma.XOR<Prisma.FacultyProfileCreateWithoutCreatedExamsInput, Prisma.FacultyProfileUncheckedCreateWithoutCreatedExamsInput>;
    where?: Prisma.FacultyProfileWhereInput;
};
export type FacultyProfileUpdateToOneWithWhereWithoutCreatedExamsInput = {
    where?: Prisma.FacultyProfileWhereInput;
    data: Prisma.XOR<Prisma.FacultyProfileUpdateWithoutCreatedExamsInput, Prisma.FacultyProfileUncheckedUpdateWithoutCreatedExamsInput>;
};
export type FacultyProfileUpdateWithoutCreatedExamsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutFacultyProfileNestedInput;
    markedAttendances?: Prisma.AttendanceUpdateManyWithoutMarkedByNestedInput;
};
export type FacultyProfileUncheckedUpdateWithoutCreatedExamsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    markedAttendances?: Prisma.AttendanceUncheckedUpdateManyWithoutMarkedByNestedInput;
};
export type FacultyProfileCreateWithoutUserInput = {
    id?: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead?: boolean;
    designation?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdExams?: Prisma.ExamCreateNestedManyWithoutCreatedByInput;
    markedAttendances?: Prisma.AttendanceCreateNestedManyWithoutMarkedByInput;
};
export type FacultyProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    facultyId: string;
    department: $Enums.Department;
    isDepartmentHead?: boolean;
    designation?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdExams?: Prisma.ExamUncheckedCreateNestedManyWithoutCreatedByInput;
    markedAttendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutMarkedByInput;
};
export type FacultyProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.FacultyProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FacultyProfileCreateWithoutUserInput, Prisma.FacultyProfileUncheckedCreateWithoutUserInput>;
};
export type FacultyProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.FacultyProfileUpdateWithoutUserInput, Prisma.FacultyProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FacultyProfileCreateWithoutUserInput, Prisma.FacultyProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.FacultyProfileWhereInput;
};
export type FacultyProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.FacultyProfileWhereInput;
    data: Prisma.XOR<Prisma.FacultyProfileUpdateWithoutUserInput, Prisma.FacultyProfileUncheckedUpdateWithoutUserInput>;
};
export type FacultyProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdExams?: Prisma.ExamUpdateManyWithoutCreatedByNestedInput;
    markedAttendances?: Prisma.AttendanceUpdateManyWithoutMarkedByNestedInput;
};
export type FacultyProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facultyId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    isDepartmentHead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdExams?: Prisma.ExamUncheckedUpdateManyWithoutCreatedByNestedInput;
    markedAttendances?: Prisma.AttendanceUncheckedUpdateManyWithoutMarkedByNestedInput;
};
/**
 * Count Type FacultyProfileCountOutputType
 */
export type FacultyProfileCountOutputType = {
    createdExams: number;
    markedAttendances: number;
};
export type FacultyProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdExams?: boolean | FacultyProfileCountOutputTypeCountCreatedExamsArgs;
    markedAttendances?: boolean | FacultyProfileCountOutputTypeCountMarkedAttendancesArgs;
};
/**
 * FacultyProfileCountOutputType without action
 */
export type FacultyProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfileCountOutputType
     */
    select?: Prisma.FacultyProfileCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FacultyProfileCountOutputType without action
 */
export type FacultyProfileCountOutputTypeCountCreatedExamsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
};
/**
 * FacultyProfileCountOutputType without action
 */
export type FacultyProfileCountOutputTypeCountMarkedAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
};
export type FacultyProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    facultyId?: boolean;
    department?: boolean;
    isDepartmentHead?: boolean;
    designation?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    createdExams?: boolean | Prisma.FacultyProfile$createdExamsArgs<ExtArgs>;
    markedAttendances?: boolean | Prisma.FacultyProfile$markedAttendancesArgs<ExtArgs>;
    _count?: boolean | Prisma.FacultyProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["facultyProfile"]>;
export type FacultyProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    facultyId?: boolean;
    department?: boolean;
    isDepartmentHead?: boolean;
    designation?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["facultyProfile"]>;
export type FacultyProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    facultyId?: boolean;
    department?: boolean;
    isDepartmentHead?: boolean;
    designation?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["facultyProfile"]>;
export type FacultyProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    facultyId?: boolean;
    department?: boolean;
    isDepartmentHead?: boolean;
    designation?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type FacultyProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "facultyId" | "department" | "isDepartmentHead" | "designation" | "phone" | "avatarUrl" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["facultyProfile"]>;
export type FacultyProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    createdExams?: boolean | Prisma.FacultyProfile$createdExamsArgs<ExtArgs>;
    markedAttendances?: boolean | Prisma.FacultyProfile$markedAttendancesArgs<ExtArgs>;
    _count?: boolean | Prisma.FacultyProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FacultyProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FacultyProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FacultyProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FacultyProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        createdExams: Prisma.$ExamPayload<ExtArgs>[];
        markedAttendances: Prisma.$AttendancePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        facultyId: string;
        department: $Enums.Department;
        isDepartmentHead: boolean;
        designation: string | null;
        phone: string | null;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["facultyProfile"]>;
    composites: {};
};
export type FacultyProfileGetPayload<S extends boolean | null | undefined | FacultyProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload, S>;
export type FacultyProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FacultyProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FacultyProfileCountAggregateInputType | true;
};
export interface FacultyProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FacultyProfile'];
        meta: {
            name: 'FacultyProfile';
        };
    };
    /**
     * Find zero or one FacultyProfile that matches the filter.
     * @param {FacultyProfileFindUniqueArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, FacultyProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FacultyProfileClient<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FacultyProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultyProfileFindUniqueOrThrowArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FacultyProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FacultyProfileClient<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FacultyProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileFindFirstArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, FacultyProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__FacultyProfileClient<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FacultyProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileFindFirstOrThrowArgs} args - Arguments to find a FacultyProfile
     * @example
     * // Get one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FacultyProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FacultyProfileClient<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FacultyProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyProfiles
     * const facultyProfiles = await prisma.facultyProfile.findMany()
     *
     * // Get first 10 FacultyProfiles
     * const facultyProfiles = await prisma.facultyProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const facultyProfileWithIdOnly = await prisma.facultyProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FacultyProfileFindManyArgs>(args?: Prisma.SelectSubset<T, FacultyProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FacultyProfile.
     * @param {FacultyProfileCreateArgs} args - Arguments to create a FacultyProfile.
     * @example
     * // Create one FacultyProfile
     * const FacultyProfile = await prisma.facultyProfile.create({
     *   data: {
     *     // ... data to create a FacultyProfile
     *   }
     * })
     *
     */
    create<T extends FacultyProfileCreateArgs>(args: Prisma.SelectSubset<T, FacultyProfileCreateArgs<ExtArgs>>): Prisma.Prisma__FacultyProfileClient<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FacultyProfiles.
     * @param {FacultyProfileCreateManyArgs} args - Arguments to create many FacultyProfiles.
     * @example
     * // Create many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FacultyProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, FacultyProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FacultyProfiles and returns the data saved in the database.
     * @param {FacultyProfileCreateManyAndReturnArgs} args - Arguments to create many FacultyProfiles.
     * @example
     * // Create many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FacultyProfiles and only return the `id`
     * const facultyProfileWithIdOnly = await prisma.facultyProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FacultyProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FacultyProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FacultyProfile.
     * @param {FacultyProfileDeleteArgs} args - Arguments to delete one FacultyProfile.
     * @example
     * // Delete one FacultyProfile
     * const FacultyProfile = await prisma.facultyProfile.delete({
     *   where: {
     *     // ... filter to delete one FacultyProfile
     *   }
     * })
     *
     */
    delete<T extends FacultyProfileDeleteArgs>(args: Prisma.SelectSubset<T, FacultyProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__FacultyProfileClient<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FacultyProfile.
     * @param {FacultyProfileUpdateArgs} args - Arguments to update one FacultyProfile.
     * @example
     * // Update one FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FacultyProfileUpdateArgs>(args: Prisma.SelectSubset<T, FacultyProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__FacultyProfileClient<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FacultyProfiles.
     * @param {FacultyProfileDeleteManyArgs} args - Arguments to filter FacultyProfiles to delete.
     * @example
     * // Delete a few FacultyProfiles
     * const { count } = await prisma.facultyProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FacultyProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, FacultyProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FacultyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FacultyProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, FacultyProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FacultyProfiles and returns the data updated in the database.
     * @param {FacultyProfileUpdateManyAndReturnArgs} args - Arguments to update many FacultyProfiles.
     * @example
     * // Update many FacultyProfiles
     * const facultyProfile = await prisma.facultyProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FacultyProfiles and only return the `id`
     * const facultyProfileWithIdOnly = await prisma.facultyProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FacultyProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FacultyProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FacultyProfile.
     * @param {FacultyProfileUpsertArgs} args - Arguments to update or create a FacultyProfile.
     * @example
     * // Update or create a FacultyProfile
     * const facultyProfile = await prisma.facultyProfile.upsert({
     *   create: {
     *     // ... data to create a FacultyProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyProfile we want to update
     *   }
     * })
     */
    upsert<T extends FacultyProfileUpsertArgs>(args: Prisma.SelectSubset<T, FacultyProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__FacultyProfileClient<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FacultyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileCountArgs} args - Arguments to filter FacultyProfiles to count.
     * @example
     * // Count the number of FacultyProfiles
     * const count = await prisma.facultyProfile.count({
     *   where: {
     *     // ... the filter for the FacultyProfiles we want to count
     *   }
     * })
    **/
    count<T extends FacultyProfileCountArgs>(args?: Prisma.Subset<T, FacultyProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FacultyProfileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FacultyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacultyProfileAggregateArgs>(args: Prisma.Subset<T, FacultyProfileAggregateArgs>): Prisma.PrismaPromise<GetFacultyProfileAggregateType<T>>;
    /**
     * Group by FacultyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends FacultyProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FacultyProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: FacultyProfileGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FacultyProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FacultyProfile model
     */
    readonly fields: FacultyProfileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FacultyProfile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FacultyProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdExams<T extends Prisma.FacultyProfile$createdExamsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacultyProfile$createdExamsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    markedAttendances<T extends Prisma.FacultyProfile$markedAttendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacultyProfile$markedAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the FacultyProfile model
 */
export interface FacultyProfileFieldRefs {
    readonly id: Prisma.FieldRef<"FacultyProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"FacultyProfile", 'String'>;
    readonly facultyId: Prisma.FieldRef<"FacultyProfile", 'String'>;
    readonly department: Prisma.FieldRef<"FacultyProfile", 'Department'>;
    readonly isDepartmentHead: Prisma.FieldRef<"FacultyProfile", 'Boolean'>;
    readonly designation: Prisma.FieldRef<"FacultyProfile", 'String'>;
    readonly phone: Prisma.FieldRef<"FacultyProfile", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"FacultyProfile", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FacultyProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FacultyProfile", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"FacultyProfile", 'DateTime'>;
}
/**
 * FacultyProfile findUnique
 */
export type FacultyProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where: Prisma.FacultyProfileWhereUniqueInput;
};
/**
 * FacultyProfile findUniqueOrThrow
 */
export type FacultyProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where: Prisma.FacultyProfileWhereUniqueInput;
};
/**
 * FacultyProfile findFirst
 */
export type FacultyProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where?: Prisma.FacultyProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: Prisma.FacultyProfileOrderByWithRelationInput | Prisma.FacultyProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FacultyProfiles.
     */
    cursor?: Prisma.FacultyProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FacultyProfiles.
     */
    distinct?: Prisma.FacultyProfileScalarFieldEnum | Prisma.FacultyProfileScalarFieldEnum[];
};
/**
 * FacultyProfile findFirstOrThrow
 */
export type FacultyProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
    /**
     * Filter, which FacultyProfile to fetch.
     */
    where?: Prisma.FacultyProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: Prisma.FacultyProfileOrderByWithRelationInput | Prisma.FacultyProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FacultyProfiles.
     */
    cursor?: Prisma.FacultyProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FacultyProfiles.
     */
    distinct?: Prisma.FacultyProfileScalarFieldEnum | Prisma.FacultyProfileScalarFieldEnum[];
};
/**
 * FacultyProfile findMany
 */
export type FacultyProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
    /**
     * Filter, which FacultyProfiles to fetch.
     */
    where?: Prisma.FacultyProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacultyProfiles to fetch.
     */
    orderBy?: Prisma.FacultyProfileOrderByWithRelationInput | Prisma.FacultyProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FacultyProfiles.
     */
    cursor?: Prisma.FacultyProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacultyProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacultyProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FacultyProfiles.
     */
    distinct?: Prisma.FacultyProfileScalarFieldEnum | Prisma.FacultyProfileScalarFieldEnum[];
};
/**
 * FacultyProfile create
 */
export type FacultyProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a FacultyProfile.
     */
    data: Prisma.XOR<Prisma.FacultyProfileCreateInput, Prisma.FacultyProfileUncheckedCreateInput>;
};
/**
 * FacultyProfile createMany
 */
export type FacultyProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyProfiles.
     */
    data: Prisma.FacultyProfileCreateManyInput | Prisma.FacultyProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FacultyProfile createManyAndReturn
 */
export type FacultyProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many FacultyProfiles.
     */
    data: Prisma.FacultyProfileCreateManyInput | Prisma.FacultyProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FacultyProfile update
 */
export type FacultyProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a FacultyProfile.
     */
    data: Prisma.XOR<Prisma.FacultyProfileUpdateInput, Prisma.FacultyProfileUncheckedUpdateInput>;
    /**
     * Choose, which FacultyProfile to update.
     */
    where: Prisma.FacultyProfileWhereUniqueInput;
};
/**
 * FacultyProfile updateMany
 */
export type FacultyProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyProfiles.
     */
    data: Prisma.XOR<Prisma.FacultyProfileUpdateManyMutationInput, Prisma.FacultyProfileUncheckedUpdateManyInput>;
    /**
     * Filter which FacultyProfiles to update
     */
    where?: Prisma.FacultyProfileWhereInput;
    /**
     * Limit how many FacultyProfiles to update.
     */
    limit?: number;
};
/**
 * FacultyProfile updateManyAndReturn
 */
export type FacultyProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * The data used to update FacultyProfiles.
     */
    data: Prisma.XOR<Prisma.FacultyProfileUpdateManyMutationInput, Prisma.FacultyProfileUncheckedUpdateManyInput>;
    /**
     * Filter which FacultyProfiles to update
     */
    where?: Prisma.FacultyProfileWhereInput;
    /**
     * Limit how many FacultyProfiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FacultyProfile upsert
 */
export type FacultyProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the FacultyProfile to update in case it exists.
     */
    where: Prisma.FacultyProfileWhereUniqueInput;
    /**
     * In case the FacultyProfile found by the `where` argument doesn't exist, create a new FacultyProfile with this data.
     */
    create: Prisma.XOR<Prisma.FacultyProfileCreateInput, Prisma.FacultyProfileUncheckedCreateInput>;
    /**
     * In case the FacultyProfile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FacultyProfileUpdateInput, Prisma.FacultyProfileUncheckedUpdateInput>;
};
/**
 * FacultyProfile delete
 */
export type FacultyProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
    /**
     * Filter which FacultyProfile to delete.
     */
    where: Prisma.FacultyProfileWhereUniqueInput;
};
/**
 * FacultyProfile deleteMany
 */
export type FacultyProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyProfiles to delete
     */
    where?: Prisma.FacultyProfileWhereInput;
    /**
     * Limit how many FacultyProfiles to delete.
     */
    limit?: number;
};
/**
 * FacultyProfile.createdExams
 */
export type FacultyProfile$createdExamsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
/**
 * FacultyProfile.markedAttendances
 */
export type FacultyProfile$markedAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Attendance
     */
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithRelationInput | Prisma.AttendanceOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceScalarFieldEnum | Prisma.AttendanceScalarFieldEnum[];
};
/**
 * FacultyProfile without action
 */
export type FacultyProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyProfile
     */
    select?: Prisma.FacultyProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacultyProfile
     */
    omit?: Prisma.FacultyProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FacultyProfileInclude<ExtArgs> | null;
};
//# sourceMappingURL=FacultyProfile.d.ts.map