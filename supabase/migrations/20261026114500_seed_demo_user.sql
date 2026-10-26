-- Seed demo user teste@adapta.org with password Template@123
DO $$
DECLARE
  demo_user_id uuid;
  target_org_id uuid;
BEGIN
  -- Find existing organization 'betsmarter' or fallback to the first organization
  SELECT id INTO target_org_id FROM public.organizations WHERE slug = 'betsmarter' LIMIT 1;
  IF target_org_id IS NULL THEN
    SELECT id INTO target_org_id FROM public.organizations ORDER BY created_at ASC LIMIT 1;
  END IF;

  -- Create organization if none exists
  IF target_org_id IS NULL THEN
    INSERT INTO public.organizations (name, slug)
    VALUES ('BetSmarter', 'betsmarter')
    RETURNING id INTO target_org_id;
  END IF;

  -- Seed demo user teste@adapta.org
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'teste@adapta.org') THEN
    demo_user_id := gen_random_uuid();

    INSERT INTO auth.users (
      id,
      instance_id,
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      raw_app_meta_data,
      raw_user_meta_data,
      is_super_admin,
      role,
      aud,
      confirmation_token,
      recovery_token,
      email_change_token_new,
      email_change,
      email_change_token_current,
      phone,
      phone_change,
      phone_change_token,
      reauthentication_token,
      is_sso_user,
      is_anonymous
    ) VALUES (
      demo_user_id,
      '00000000-0000-0000-0000-000000000000',
      'teste@adapta.org',
      extensions.crypt('Template@123', extensions.gen_salt('bf')),
      NOW(),
      NOW(),
      NOW(),
      '{"provider": "email", "providers": ["email"]}'::jsonb,
      jsonb_build_object(
        'full_name', 'Demo Adapta',
        'organization_id', target_org_id::text,
        'role', 'admin'
      ),
      false,
      'authenticated',
      'authenticated',
      '',    -- confirmation_token: MUST be '' not NULL
      '',    -- recovery_token: MUST be '' not NULL
      '',    -- email_change_token_new: MUST be '' not NULL
      '',    -- email_change: MUST be '' not NULL
      '',    -- email_change_token_current: MUST be '' not NULL
      NULL,  -- phone: MUST be NULL (not '') due to UNIQUE constraint
      '',    -- phone_change: MUST be '' not NULL
      '',    -- phone_change_token: MUST be '' not NULL
      '',    -- reauthentication_token: MUST be '' not NULL
      false,
      false
    );

    -- Ensure profile exists with admin role and belongs to the target organization
    INSERT INTO public.profiles (id, full_name, organization_id, role)
    VALUES (demo_user_id, 'Demo Adapta', target_org_id, 'admin')
    ON CONFLICT (id) DO UPDATE
    SET organization_id = EXCLUDED.organization_id,
        role = 'admin',
        full_name = EXCLUDED.full_name;
  ELSE
    -- If user already existed, ensure encrypted_password and email_confirmed_at are set correctly
    UPDATE auth.users
    SET
      encrypted_password = extensions.crypt('Template@123', extensions.gen_salt('bf')),
      email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
      raw_app_meta_data = '{"provider": "email", "providers": ["email"]}'::jsonb
    WHERE email = 'teste@adapta.org'
    RETURNING id INTO demo_user_id;

    -- Ensure profile is attached to target_org_id as admin
    INSERT INTO public.profiles (id, full_name, organization_id, role)
    VALUES (demo_user_id, 'Demo Adapta', target_org_id, 'admin')
    ON CONFLICT (id) DO UPDATE
    SET organization_id = EXCLUDED.organization_id,
        role = 'admin';
  END IF;

  -- Also seed fallback admin user required by coding conventions if absent
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'eduardo.canal@zionlogtec.com.br') THEN
    DECLARE
      dev_user_id uuid := gen_random_uuid();
    BEGIN
      INSERT INTO auth.users (
        id,
        instance_id,
        email,
        encrypted_password,
        email_confirmed_at,
        created_at,
        updated_at,
        raw_app_meta_data,
        raw_user_meta_data,
        is_super_admin,
        role,
        aud,
        confirmation_token,
        recovery_token,
        email_change_token_new,
        email_change,
        email_change_token_current,
        phone,
        phone_change,
        phone_change_token,
        reauthentication_token,
        is_sso_user,
        is_anonymous
      ) VALUES (
        dev_user_id,
        '00000000-0000-0000-0000-000000000000',
        'eduardo.canal@zionlogtec.com.br',
        extensions.crypt('Template@123', extensions.gen_salt('bf')),
        NOW(),
        NOW(),
        NOW(),
        '{"provider": "email", "providers": ["email"]}'::jsonb,
        jsonb_build_object(
          'full_name', 'Eduardo Canal',
          'organization_id', target_org_id::text,
          'role', 'admin'
        ),
        false,
        'authenticated',
        'authenticated',
        '', '', '', '', '',
        NULL,
        '', '', '',
        false,
        false
      );

      INSERT INTO public.profiles (id, full_name, organization_id, role)
      VALUES (dev_user_id, 'Eduardo Canal', target_org_id, 'admin')
      ON CONFLICT (id) DO UPDATE
      SET organization_id = EXCLUDED.organization_id,
          role = 'admin';
    END;
  END IF;
END $$;
