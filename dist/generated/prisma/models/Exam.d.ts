import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Exam
 *
 */
export type ExamModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamPayload>;
export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null;
    _avg: ExamAvgAggregateOutputType | null;
    _sum: ExamSumAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
export type ExamAvgAggregateOutputType = {
    totalMarks: number | null;
    weightPercent: number | null;
};
export type ExamSumAggregateOutputType = {
    totalMarks: number | null;
    weightPercent: number | null;
};
export type ExamMinAggregateOutputType = {
    id: string | null;
    semesterId: string | null;
    title: string | null;
    type: $Enums.ExamType | null;
    examDate: Date | null;
    totalMarks: number | null;
    weightPercent: number | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ExamMaxAggregateOutputType = {
    id: string | null;
    semesterId: string | null;
    title: string | null;
    type: $Enums.ExamType | null;
    examDate: Date | null;
    totalMarks: number | null;
    weightPercent: number | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ExamCountAggregateOutputType = {
    id: number;
    semesterId: number;
    title: number;
    type: number;
    examDate: number;
    totalMarks: number;
    weightPercent: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type ExamAvgAggregateInputType = {
    totalMarks?: true;
    weightPercent?: true;
};
export type ExamSumAggregateInputType = {
    totalMarks?: true;
    weightPercent?: true;
};
export type ExamMinAggregateInputType = {
    id?: true;
    semesterId?: true;
    title?: true;
    type?: true;
    examDate?: true;
    totalMarks?: true;
    weightPercent?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ExamMaxAggregateInputType = {
    id?: true;
    semesterId?: true;
    title?: true;
    type?: true;
    examDate?: true;
    totalMarks?: true;
    weightPercent?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ExamCountAggregateInputType = {
    id?: true;
    semesterId?: true;
    title?: true;
    type?: true;
    examDate?: true;
    totalMarks?: true;
    weightPercent?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type ExamAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: Prisma.ExamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Exams to fetch.
     */
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ExamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType;
};
export type GetExamAggregateType<T extends ExamAggregateArgs> = {
    [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExam[P]> : Prisma.GetScalarType<T[P], AggregateExam[P]>;
};
export type ExamGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithAggregationInput | Prisma.ExamOrderByWithAggregationInput[];
    by: Prisma.ExamScalarFieldEnum[] | Prisma.ExamScalarFieldEnum;
    having?: Prisma.ExamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamCountAggregateInputType | true;
    _avg?: ExamAvgAggregateInputType;
    _sum?: ExamSumAggregateInputType;
    _min?: ExamMinAggregateInputType;
    _max?: ExamMaxAggregateInputType;
};
export type ExamGroupByOutputType = {
    id: string;
    semesterId: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date;
    totalMarks: number;
    weightPercent: number;
    createdById: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: ExamCountAggregateOutputType | null;
    _avg: ExamAvgAggregateOutputType | null;
    _sum: ExamSumAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
export type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]>;
}>>;
export type ExamWhereInput = {
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    id?: Prisma.StringFilter<"Exam"> | string;
    semesterId?: Prisma.StringFilter<"Exam"> | string;
    title?: Prisma.StringFilter<"Exam"> | string;
    type?: Prisma.EnumExamTypeFilter<"Exam"> | $Enums.ExamType;
    examDate?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    totalMarks?: Prisma.FloatFilter<"Exam"> | number;
    weightPercent?: Prisma.FloatFilter<"Exam"> | number;
    createdById?: Prisma.StringNullableFilter<"Exam"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Exam"> | Date | string | null;
    semester?: Prisma.XOR<Prisma.SemesterScalarRelationFilter, Prisma.SemesterWhereInput>;
    createdBy?: Prisma.XOR<Prisma.FacultyProfileNullableScalarRelationFilter, Prisma.FacultyProfileWhereInput> | null;
    results?: Prisma.ExamResultListRelationFilter;
};
export type ExamOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    semesterId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
    weightPercent?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    semester?: Prisma.SemesterOrderByWithRelationInput;
    createdBy?: Prisma.FacultyProfileOrderByWithRelationInput;
    results?: Prisma.ExamResultOrderByRelationAggregateInput;
};
export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    semesterId?: Prisma.StringFilter<"Exam"> | string;
    title?: Prisma.StringFilter<"Exam"> | string;
    type?: Prisma.EnumExamTypeFilter<"Exam"> | $Enums.ExamType;
    examDate?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    totalMarks?: Prisma.FloatFilter<"Exam"> | number;
    weightPercent?: Prisma.FloatFilter<"Exam"> | number;
    createdById?: Prisma.StringNullableFilter<"Exam"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Exam"> | Date | string | null;
    semester?: Prisma.XOR<Prisma.SemesterScalarRelationFilter, Prisma.SemesterWhereInput>;
    createdBy?: Prisma.XOR<Prisma.FacultyProfileNullableScalarRelationFilter, Prisma.FacultyProfileWhereInput> | null;
    results?: Prisma.ExamResultListRelationFilter;
}, "id">;
export type ExamOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    semesterId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
    weightPercent?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ExamCountOrderByAggregateInput;
    _avg?: Prisma.ExamAvgOrderByAggregateInput;
    _max?: Prisma.ExamMaxOrderByAggregateInput;
    _min?: Prisma.ExamMinOrderByAggregateInput;
    _sum?: Prisma.ExamSumOrderByAggregateInput;
};
export type ExamScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    semesterId?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    type?: Prisma.EnumExamTypeWithAggregatesFilter<"Exam"> | $Enums.ExamType;
    examDate?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    totalMarks?: Prisma.FloatWithAggregatesFilter<"Exam"> | number;
    weightPercent?: Prisma.FloatWithAggregatesFilter<"Exam"> | number;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"Exam"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Exam"> | Date | string | null;
};
export type ExamCreateInput = {
    id?: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    semester: Prisma.SemesterCreateNestedOneWithoutExamsInput;
    createdBy?: Prisma.FacultyProfileCreateNestedOneWithoutCreatedExamsInput;
    results?: Prisma.ExamResultCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateInput = {
    id?: string;
    semesterId: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    results?: Prisma.ExamResultUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    semester?: Prisma.SemesterUpdateOneRequiredWithoutExamsNestedInput;
    createdBy?: Prisma.FacultyProfileUpdateOneWithoutCreatedExamsNestedInput;
    results?: Prisma.ExamResultUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    semesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    results?: Prisma.ExamResultUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamCreateManyInput = {
    id?: string;
    semesterId: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ExamUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExamUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    semesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExamCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    semesterId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
    weightPercent?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ExamAvgOrderByAggregateInput = {
    totalMarks?: Prisma.SortOrder;
    weightPercent?: Prisma.SortOrder;
};
export type ExamMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    semesterId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
    weightPercent?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ExamMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    semesterId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    totalMarks?: Prisma.SortOrder;
    weightPercent?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ExamSumOrderByAggregateInput = {
    totalMarks?: Prisma.SortOrder;
    weightPercent?: Prisma.SortOrder;
};
export type ExamScalarRelationFilter = {
    is?: Prisma.ExamWhereInput;
    isNot?: Prisma.ExamWhereInput;
};
export type ExamListRelationFilter = {
    every?: Prisma.ExamWhereInput;
    some?: Prisma.ExamWhereInput;
    none?: Prisma.ExamWhereInput;
};
export type ExamOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumExamTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExamType;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ExamCreateNestedOneWithoutResultsInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutResultsInput, Prisma.ExamUncheckedCreateWithoutResultsInput>;
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutResultsInput;
    connect?: Prisma.ExamWhereUniqueInput;
};
export type ExamUpdateOneRequiredWithoutResultsNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutResultsInput, Prisma.ExamUncheckedCreateWithoutResultsInput>;
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutResultsInput;
    upsert?: Prisma.ExamUpsertWithoutResultsInput;
    connect?: Prisma.ExamWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExamUpdateToOneWithWhereWithoutResultsInput, Prisma.ExamUpdateWithoutResultsInput>, Prisma.ExamUncheckedUpdateWithoutResultsInput>;
};
export type ExamCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutCreatedByInput, Prisma.ExamUncheckedCreateWithoutCreatedByInput> | Prisma.ExamCreateWithoutCreatedByInput[] | Prisma.ExamUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutCreatedByInput | Prisma.ExamCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ExamCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutCreatedByInput, Prisma.ExamUncheckedCreateWithoutCreatedByInput> | Prisma.ExamCreateWithoutCreatedByInput[] | Prisma.ExamUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutCreatedByInput | Prisma.ExamCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ExamCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutCreatedByInput, Prisma.ExamUncheckedCreateWithoutCreatedByInput> | Prisma.ExamCreateWithoutCreatedByInput[] | Prisma.ExamUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutCreatedByInput | Prisma.ExamCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ExamUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ExamCreateManyCreatedByInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ExamUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutCreatedByInput | Prisma.ExamUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutCreatedByInput, Prisma.ExamUncheckedCreateWithoutCreatedByInput> | Prisma.ExamCreateWithoutCreatedByInput[] | Prisma.ExamUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutCreatedByInput | Prisma.ExamCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ExamUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ExamCreateManyCreatedByInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ExamUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutCreatedByInput | Prisma.ExamUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamCreateNestedManyWithoutSemesterInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSemesterInput, Prisma.ExamUncheckedCreateWithoutSemesterInput> | Prisma.ExamCreateWithoutSemesterInput[] | Prisma.ExamUncheckedCreateWithoutSemesterInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSemesterInput | Prisma.ExamCreateOrConnectWithoutSemesterInput[];
    createMany?: Prisma.ExamCreateManySemesterInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSemesterInput, Prisma.ExamUncheckedCreateWithoutSemesterInput> | Prisma.ExamCreateWithoutSemesterInput[] | Prisma.ExamUncheckedCreateWithoutSemesterInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSemesterInput | Prisma.ExamCreateOrConnectWithoutSemesterInput[];
    createMany?: Prisma.ExamCreateManySemesterInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUpdateManyWithoutSemesterNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSemesterInput, Prisma.ExamUncheckedCreateWithoutSemesterInput> | Prisma.ExamCreateWithoutSemesterInput[] | Prisma.ExamUncheckedCreateWithoutSemesterInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSemesterInput | Prisma.ExamCreateOrConnectWithoutSemesterInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutSemesterInput | Prisma.ExamUpsertWithWhereUniqueWithoutSemesterInput[];
    createMany?: Prisma.ExamCreateManySemesterInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutSemesterInput | Prisma.ExamUpdateWithWhereUniqueWithoutSemesterInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutSemesterInput | Prisma.ExamUpdateManyWithWhereWithoutSemesterInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSemesterInput, Prisma.ExamUncheckedCreateWithoutSemesterInput> | Prisma.ExamCreateWithoutSemesterInput[] | Prisma.ExamUncheckedCreateWithoutSemesterInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSemesterInput | Prisma.ExamCreateOrConnectWithoutSemesterInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutSemesterInput | Prisma.ExamUpsertWithWhereUniqueWithoutSemesterInput[];
    createMany?: Prisma.ExamCreateManySemesterInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutSemesterInput | Prisma.ExamUpdateWithWhereUniqueWithoutSemesterInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutSemesterInput | Prisma.ExamUpdateManyWithWhereWithoutSemesterInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamCreateWithoutResultsInput = {
    id?: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    semester: Prisma.SemesterCreateNestedOneWithoutExamsInput;
    createdBy?: Prisma.FacultyProfileCreateNestedOneWithoutCreatedExamsInput;
};
export type ExamUncheckedCreateWithoutResultsInput = {
    id?: string;
    semesterId: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ExamCreateOrConnectWithoutResultsInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutResultsInput, Prisma.ExamUncheckedCreateWithoutResultsInput>;
};
export type ExamUpsertWithoutResultsInput = {
    update: Prisma.XOR<Prisma.ExamUpdateWithoutResultsInput, Prisma.ExamUncheckedUpdateWithoutResultsInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutResultsInput, Prisma.ExamUncheckedCreateWithoutResultsInput>;
    where?: Prisma.ExamWhereInput;
};
export type ExamUpdateToOneWithWhereWithoutResultsInput = {
    where?: Prisma.ExamWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutResultsInput, Prisma.ExamUncheckedUpdateWithoutResultsInput>;
};
export type ExamUpdateWithoutResultsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    semester?: Prisma.SemesterUpdateOneRequiredWithoutExamsNestedInput;
    createdBy?: Prisma.FacultyProfileUpdateOneWithoutCreatedExamsNestedInput;
};
export type ExamUncheckedUpdateWithoutResultsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    semesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExamCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    semester: Prisma.SemesterCreateNestedOneWithoutExamsInput;
    results?: Prisma.ExamResultCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    semesterId: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    results?: Prisma.ExamResultUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutCreatedByInput, Prisma.ExamUncheckedCreateWithoutCreatedByInput>;
};
export type ExamCreateManyCreatedByInputEnvelope = {
    data: Prisma.ExamCreateManyCreatedByInput | Prisma.ExamCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type ExamUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ExamWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamUpdateWithoutCreatedByInput, Prisma.ExamUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutCreatedByInput, Prisma.ExamUncheckedCreateWithoutCreatedByInput>;
};
export type ExamUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ExamWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutCreatedByInput, Prisma.ExamUncheckedUpdateWithoutCreatedByInput>;
};
export type ExamUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.ExamScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyWithoutCreatedByInput>;
};
export type ExamScalarWhereInput = {
    AND?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
    OR?: Prisma.ExamScalarWhereInput[];
    NOT?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
    id?: Prisma.StringFilter<"Exam"> | string;
    semesterId?: Prisma.StringFilter<"Exam"> | string;
    title?: Prisma.StringFilter<"Exam"> | string;
    type?: Prisma.EnumExamTypeFilter<"Exam"> | $Enums.ExamType;
    examDate?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    totalMarks?: Prisma.FloatFilter<"Exam"> | number;
    weightPercent?: Prisma.FloatFilter<"Exam"> | number;
    createdById?: Prisma.StringNullableFilter<"Exam"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Exam"> | Date | string | null;
};
export type ExamCreateWithoutSemesterInput = {
    id?: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdBy?: Prisma.FacultyProfileCreateNestedOneWithoutCreatedExamsInput;
    results?: Prisma.ExamResultCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutSemesterInput = {
    id?: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    results?: Prisma.ExamResultUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutSemesterInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutSemesterInput, Prisma.ExamUncheckedCreateWithoutSemesterInput>;
};
export type ExamCreateManySemesterInputEnvelope = {
    data: Prisma.ExamCreateManySemesterInput | Prisma.ExamCreateManySemesterInput[];
    skipDuplicates?: boolean;
};
export type ExamUpsertWithWhereUniqueWithoutSemesterInput = {
    where: Prisma.ExamWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamUpdateWithoutSemesterInput, Prisma.ExamUncheckedUpdateWithoutSemesterInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutSemesterInput, Prisma.ExamUncheckedCreateWithoutSemesterInput>;
};
export type ExamUpdateWithWhereUniqueWithoutSemesterInput = {
    where: Prisma.ExamWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutSemesterInput, Prisma.ExamUncheckedUpdateWithoutSemesterInput>;
};
export type ExamUpdateManyWithWhereWithoutSemesterInput = {
    where: Prisma.ExamScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyWithoutSemesterInput>;
};
export type ExamCreateManyCreatedByInput = {
    id?: string;
    semesterId: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ExamUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    semester?: Prisma.SemesterUpdateOneRequiredWithoutExamsNestedInput;
    results?: Prisma.ExamResultUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    semesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    results?: Prisma.ExamResultUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    semesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ExamCreateManySemesterInput = {
    id?: string;
    title: string;
    type: $Enums.ExamType;
    examDate: Date | string;
    totalMarks: number;
    weightPercent: number;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ExamUpdateWithoutSemesterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.FacultyProfileUpdateOneWithoutCreatedExamsNestedInput;
    results?: Prisma.ExamResultUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutSemesterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    results?: Prisma.ExamResultUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateManyWithoutSemesterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalMarks?: Prisma.FloatFieldUpdateOperationsInput | number;
    weightPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type ExamCountOutputType
 */
export type ExamCountOutputType = {
    results: number;
};
export type ExamCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    results?: boolean | ExamCountOutputTypeCountResultsArgs;
};
/**
 * ExamCountOutputType without action
 */
export type ExamCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: Prisma.ExamCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ExamCountOutputType without action
 */
export type ExamCountOutputTypeCountResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamResultWhereInput;
};
export type ExamSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    semesterId?: boolean;
    title?: boolean;
    type?: boolean;
    examDate?: boolean;
    totalMarks?: boolean;
    weightPercent?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    semester?: boolean | Prisma.SemesterDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Exam$createdByArgs<ExtArgs>;
    results?: boolean | Prisma.Exam$resultsArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    semesterId?: boolean;
    title?: boolean;
    type?: boolean;
    examDate?: boolean;
    totalMarks?: boolean;
    weightPercent?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    semester?: boolean | Prisma.SemesterDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Exam$createdByArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    semesterId?: boolean;
    title?: boolean;
    type?: boolean;
    examDate?: boolean;
    totalMarks?: boolean;
    weightPercent?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    semester?: boolean | Prisma.SemesterDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Exam$createdByArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectScalar = {
    id?: boolean;
    semesterId?: boolean;
    title?: boolean;
    type?: boolean;
    examDate?: boolean;
    totalMarks?: boolean;
    weightPercent?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type ExamOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "semesterId" | "title" | "type" | "examDate" | "totalMarks" | "weightPercent" | "createdById" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["exam"]>;
export type ExamInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    semester?: boolean | Prisma.SemesterDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Exam$createdByArgs<ExtArgs>;
    results?: boolean | Prisma.Exam$resultsArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExamIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    semester?: boolean | Prisma.SemesterDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Exam$createdByArgs<ExtArgs>;
};
export type ExamIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    semester?: boolean | Prisma.SemesterDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Exam$createdByArgs<ExtArgs>;
};
export type $ExamPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Exam";
    objects: {
        semester: Prisma.$SemesterPayload<ExtArgs>;
        createdBy: Prisma.$FacultyProfilePayload<ExtArgs> | null;
        results: Prisma.$ExamResultPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        semesterId: string;
        title: string;
        type: $Enums.ExamType;
        examDate: Date;
        totalMarks: number;
        weightPercent: number;
        createdById: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["exam"]>;
    composites: {};
};
export type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamPayload, S>;
export type ExamCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamCountAggregateInputType | true;
};
export interface ExamDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Exam'];
        meta: {
            name: 'Exam';
        };
    };
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     *
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ExamFindManyArgs>(args?: Prisma.SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     *
     */
    create<T extends ExamCreateArgs>(args: Prisma.SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ExamCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     *
     */
    delete<T extends ExamDeleteArgs>(args: Prisma.SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ExamUpdateArgs>(args: Prisma.SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ExamUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: Prisma.SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(args?: Prisma.Subset<T, ExamCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Prisma.Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>;
    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ExamGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Exam model
     */
    readonly fields: ExamFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Exam.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ExamClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    semester<T extends Prisma.SemesterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SemesterDefaultArgs<ExtArgs>>): Prisma.Prisma__SemesterClient<runtime.Types.Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.Exam$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Exam$createdByArgs<ExtArgs>>): Prisma.Prisma__FacultyProfileClient<runtime.Types.Result.GetResult<Prisma.$FacultyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    results<T extends Prisma.Exam$resultsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Exam$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Exam model
 */
export interface ExamFieldRefs {
    readonly id: Prisma.FieldRef<"Exam", 'String'>;
    readonly semesterId: Prisma.FieldRef<"Exam", 'String'>;
    readonly title: Prisma.FieldRef<"Exam", 'String'>;
    readonly type: Prisma.FieldRef<"Exam", 'ExamType'>;
    readonly examDate: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly totalMarks: Prisma.FieldRef<"Exam", 'Float'>;
    readonly weightPercent: Prisma.FieldRef<"Exam", 'Float'>;
    readonly createdById: Prisma.FieldRef<"Exam", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Exam", 'DateTime'>;
}
/**
 * Exam findUnique
 */
export type ExamFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Exam to fetch.
     */
    where: Prisma.ExamWhereUniqueInput;
};
/**
 * Exam findUniqueOrThrow
 */
export type ExamFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Exam to fetch.
     */
    where: Prisma.ExamWhereUniqueInput;
};
/**
 * Exam findFirst
 */
export type ExamFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Exam to fetch.
     */
    where?: Prisma.ExamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Exams to fetch.
     */
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Exams.
     */
    cursor?: Prisma.ExamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Exams.
     */
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
/**
 * Exam findFirstOrThrow
 */
export type ExamFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Exam to fetch.
     */
    where?: Prisma.ExamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Exams to fetch.
     */
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Exams.
     */
    cursor?: Prisma.ExamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Exams.
     */
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
/**
 * Exam findMany
 */
export type ExamFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Exams to fetch.
     */
    where?: Prisma.ExamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Exams to fetch.
     */
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Exams.
     */
    cursor?: Prisma.ExamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Exams.
     */
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
/**
 * Exam create
 */
export type ExamCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Exam.
     */
    data: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
};
/**
 * Exam createMany
 */
export type ExamCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: Prisma.ExamCreateManyInput | Prisma.ExamCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Exam createManyAndReturn
 */
export type ExamCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * The data used to create many Exams.
     */
    data: Prisma.ExamCreateManyInput | Prisma.ExamCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Exam update
 */
export type ExamUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Exam.
     */
    data: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
    /**
     * Choose, which Exam to update.
     */
    where: Prisma.ExamWhereUniqueInput;
};
/**
 * Exam updateMany
 */
export type ExamUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyInput>;
    /**
     * Filter which Exams to update
     */
    where?: Prisma.ExamWhereInput;
    /**
     * Limit how many Exams to update.
     */
    limit?: number;
};
/**
 * Exam updateManyAndReturn
 */
export type ExamUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: Prisma.ExamSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Exam
     */
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    /**
     * The data used to update Exams.
     */
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyInput>;
    /**
     * Filter which Exams to update
     */
    where?: Prisma.ExamWhereInput;
    /**
     * Limit how many Exams to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Exam upsert
 */
export type ExamUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: Prisma.ExamWhereUniqueInput;
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
};
/**
 * Exam delete
 */
export type ExamDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Exam to delete.
     */
    where: Prisma.ExamWhereUniqueInput;
};
/**
 * Exam deleteMany
 */
export type ExamDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: Prisma.ExamWhereInput;
    /**
     * Limit how many Exams to delete.
     */
    limit?: number;
};
/**
 * Exam.createdBy
 */
export type Exam$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.FacultyProfileWhereInput;
};
/**
 * Exam.results
 */
export type Exam$resultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: Prisma.ExamResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExamResult
     */
    omit?: Prisma.ExamResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExamResultInclude<ExtArgs> | null;
    where?: Prisma.ExamResultWhereInput;
    orderBy?: Prisma.ExamResultOrderByWithRelationInput | Prisma.ExamResultOrderByWithRelationInput[];
    cursor?: Prisma.ExamResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamResultScalarFieldEnum | Prisma.ExamResultScalarFieldEnum[];
};
/**
 * Exam without action
 */
export type ExamDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Exam.d.ts.map