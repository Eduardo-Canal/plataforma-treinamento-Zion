// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.4'
  }
  public: {
    Tables: {
      ba_analytics: {
        Row: {
          clicks: number | null
          comments: number | null
          id: string
          impressions: number | null
          likes: number | null
          platform: string
          post_version_id: string
          recorded_at: string
          shares: number | null
        }
        Insert: {
          clicks?: number | null
          comments?: number | null
          id?: string
          impressions?: number | null
          likes?: number | null
          platform: string
          post_version_id: string
          recorded_at?: string
          shares?: number | null
        }
        Update: {
          clicks?: number | null
          comments?: number | null
          id?: string
          impressions?: number | null
          likes?: number | null
          platform?: string
          post_version_id?: string
          recorded_at?: string
          shares?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'ba_analytics_post_version_id_fkey'
            columns: ['post_version_id']
            isOneToOne: false
            referencedRelation: 'ba_post_versions'
            referencedColumns: ['id']
          },
        ]
      }
      ba_post_versions: {
        Row: {
          content: string
          created_at: string
          hashtags: string[] | null
          id: string
          image_url: string | null
          platform: string
          post_id: string
          published_at: string | null
          published_url: string | null
          status: string
        }
        Insert: {
          content: string
          created_at?: string
          hashtags?: string[] | null
          id?: string
          image_url?: string | null
          platform: string
          post_id: string
          published_at?: string | null
          published_url?: string | null
          status?: string
        }
        Update: {
          content?: string
          created_at?: string
          hashtags?: string[] | null
          id?: string
          image_url?: string | null
          platform?: string
          post_id?: string
          published_at?: string | null
          published_url?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: 'ba_post_versions_post_id_fkey'
            columns: ['post_id']
            isOneToOne: false
            referencedRelation: 'ba_posts'
            referencedColumns: ['id']
          },
        ]
      }
      ba_posts: {
        Row: {
          created_at: string
          id: string
          status: string
          theme_angle: string | null
          theme_title: string
        }
        Insert: {
          created_at?: string
          id?: string
          status?: string
          theme_angle?: string | null
          theme_title: string
        }
        Update: {
          created_at?: string
          id?: string
          status?: string
          theme_angle?: string | null
          theme_title?: string
        }
        Relationships: []
      }
      ba_schedules: {
        Row: {
          created_at: string
          error: string | null
          executed_at: string | null
          id: string
          platform: string
          post_version_id: string
          scheduled_at: string
          status: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          executed_at?: string | null
          id?: string
          platform: string
          post_version_id: string
          scheduled_at: string
          status?: string
        }
        Update: {
          created_at?: string
          error?: string | null
          executed_at?: string | null
          id?: string
          platform?: string
          post_version_id?: string
          scheduled_at?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: 'ba_schedules_post_version_id_fkey'
            columns: ['post_version_id']
            isOneToOne: false
            referencedRelation: 'ba_post_versions'
            referencedColumns: ['id']
          },
        ]
      }
      courses: {
        Row: {
          created_at: string
          description: string | null
          duration_text: string | null
          id: string
          image_color: string | null
          image_query: string | null
          instructor_avatar: string | null
          instructor_name: string | null
          label: string | null
          organization_id: string
          rating: number | null
          reviews: number | null
          thumbnail_url: string | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_text?: string | null
          id?: string
          image_color?: string | null
          image_query?: string | null
          instructor_avatar?: string | null
          instructor_name?: string | null
          label?: string | null
          organization_id: string
          rating?: number | null
          reviews?: number | null
          thumbnail_url?: string | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_text?: string | null
          id?: string
          image_color?: string | null
          image_query?: string | null
          instructor_avatar?: string | null
          instructor_name?: string | null
          label?: string | null
          organization_id?: string
          rating?: number | null
          reviews?: number | null
          thumbnail_url?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'courses_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      lessons: {
        Row: {
          created_at: string
          duration: string | null
          id: string
          is_locked: boolean | null
          is_test: boolean | null
          module_id: string
          order_index: number
          title: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          duration?: string | null
          id?: string
          is_locked?: boolean | null
          is_test?: boolean | null
          module_id: string
          order_index?: number
          title: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          duration?: string | null
          id?: string
          is_locked?: boolean | null
          is_test?: boolean | null
          module_id?: string
          order_index?: number
          title?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lessons_module_id_fkey'
            columns: ['module_id']
            isOneToOne: false
            referencedRelation: 'modules'
            referencedColumns: ['id']
          },
        ]
      }
      modules: {
        Row: {
          course_id: string
          created_at: string
          id: string
          order_index: number
          title: string
        }
        Insert: {
          course_id: string
          created_at?: string
          id?: string
          order_index?: number
          title: string
        }
        Update: {
          course_id?: string
          created_at?: string
          id?: string
          order_index?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'modules_course_id_fkey'
            columns: ['course_id']
            isOneToOne: false
            referencedRelation: 'courses'
            referencedColumns: ['id']
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          header_subtitle: string | null
          header_subtitle_color: string | null
          header_title: string | null
          header_title_color: string | null
          hero_subtitle: string | null
          hero_subtitle_color: string | null
          hero_title: string | null
          hero_title_color: string | null
          id: string
          logo_url: string | null
          name: string
          platform_bg_color: string | null
          slug: string
        }
        Insert: {
          created_at?: string
          header_subtitle?: string | null
          header_subtitle_color?: string | null
          header_title?: string | null
          header_title_color?: string | null
          hero_subtitle?: string | null
          hero_subtitle_color?: string | null
          hero_title?: string | null
          hero_title_color?: string | null
          id?: string
          logo_url?: string | null
          name: string
          platform_bg_color?: string | null
          slug: string
        }
        Update: {
          created_at?: string
          header_subtitle?: string | null
          header_subtitle_color?: string | null
          header_title?: string | null
          header_title_color?: string | null
          hero_subtitle?: string | null
          hero_subtitle_color?: string | null
          hero_title?: string | null
          hero_title_color?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          platform_bg_color?: string | null
          slug?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          organization_id: string | null
          role: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          organization_id?: string | null
          role?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          organization_id?: string | null
          role?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      quiz_options: {
        Row: {
          created_at: string
          id: string
          is_correct: boolean
          option_text: string
          order_index: number
          question_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_correct?: boolean
          option_text: string
          order_index?: number
          question_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_correct?: boolean
          option_text?: string
          order_index?: number
          question_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'quiz_options_question_id_fkey'
            columns: ['question_id']
            isOneToOne: false
            referencedRelation: 'quiz_questions'
            referencedColumns: ['id']
          },
        ]
      }
      quiz_questions: {
        Row: {
          created_at: string
          id: string
          lesson_id: string
          order_index: number
          question_text: string
        }
        Insert: {
          created_at?: string
          id?: string
          lesson_id: string
          order_index?: number
          question_text: string
        }
        Update: {
          created_at?: string
          id?: string
          lesson_id?: string
          order_index?: number
          question_text?: string
        }
        Relationships: [
          {
            foreignKeyName: 'quiz_questions_lesson_id_fkey'
            columns: ['lesson_id']
            isOneToOne: false
            referencedRelation: 'lessons'
            referencedColumns: ['id']
          },
        ]
      }
      user_progress: {
        Row: {
          id: string
          is_completed: boolean | null
          last_watched_at: string | null
          lesson_id: string
          profile_id: string
          score: number | null
        }
        Insert: {
          id?: string
          is_completed?: boolean | null
          last_watched_at?: string | null
          lesson_id: string
          profile_id: string
          score?: number | null
        }
        Update: {
          id?: string
          is_completed?: boolean | null
          last_watched_at?: string | null
          lesson_id?: string
          profile_id?: string
          score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'user_progress_lesson_id_fkey'
            columns: ['lesson_id']
            isOneToOne: false
            referencedRelation: 'lessons'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'user_progress_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_org_admin: { Args: { org_id: string }; Returns: boolean }
      is_org_member: { Args: { org_id: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
